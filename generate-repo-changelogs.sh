#!/bin/bash

# Generate changelogs for all recently updated repositories
# Finds repos with updated_at < 30 days in their github.json
# and calls ./generate-repo-changelog.sh for each one

set -e

DAYS_AGO=${DAYS_AGO:-30}
CHANGELOG_SKIP_DAYS=${CHANGELOG_SKIP_DAYS:-7}

# Compute cutoff dates
if date -v -1d > /dev/null 2>&1; then
    # macOS
    CUTOFF=$(date -v -${DAYS_AGO}d -u +%Y-%m-%dT%H:%M:%SZ)
    CHANGELOG_CUTOFF=$(date -v -${CHANGELOG_SKIP_DAYS}d -u +%Y-%m-%dT%H:%M:%SZ)
else
    # GNU/Linux
    CUTOFF=$(date -u -d "$DAYS_AGO days ago" +%Y-%m-%dT%H:%M:%SZ)
    CHANGELOG_CUTOFF=$(date -u -d "$CHANGELOG_SKIP_DAYS days ago" +%Y-%m-%dT%H:%M:%SZ)
fi

echo "Looking for repos updated since: $CUTOFF"
echo "Skipping repos with CHANGELOG-generated.md committed since: $CHANGELOG_CUTOFF"

COUNT=0
ERRORS=0

for github_json in ./repos/*/*/github.json; do
    [ -f "$github_json" ] || continue

    updated_at=$(jq -r '.updated_at // empty' "$github_json" 2>/dev/null)
    [ -z "$updated_at" ] && continue

    if [[ "$updated_at" > "$CUTOFF" ]]; then
        repo_dir=$(dirname "$github_json")
        changelog_file="$repo_dir/CHANGELOG-generated.md"

        # Skip if CHANGELOG-generated.md was committed within the last CHANGELOG_SKIP_DAYS days
        if [ -f "$changelog_file" ]; then
            # echo "--- SKIP $repo_dir (exist)"
            # continue
            changelog_git_date=$(git log -1 --format="%aI" -- "$changelog_file" 2>/dev/null)
            if [ -n "$changelog_git_date" ] && [[ "$changelog_git_date" > "$CHANGELOG_CUTOFF" ]]; then
                echo "--- SKIP $repo_dir (changelog recently committed: $changelog_git_date)"
                continue
            fi
        fi

        echo "--- $repo_dir (updated: $updated_at)"
        COUNT=$((COUNT + 1))

        if ./generate-repo-changelog.sh "$repo_dir" > "$changelog_file"; then
            echo ""
        else
            echo "Error processing $repo_dir" >&2
            ERRORS=$((ERRORS + 1))
        fi
    fi
done

echo "Done: $COUNT repos processed, $ERRORS errors"
