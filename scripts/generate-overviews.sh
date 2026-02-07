#!/bin/bash

# Generate overview.json for all repositories
# Reads repos/*/repos.json and runs generate-repo-overview.sh for each repo

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Check if generate-repo-overview.sh exists
if [ ! -x "$SCRIPT_DIR/generate-repo-overview.sh" ]; then
    echo "Error: generate-repo-overview.sh not found or not executable" >&2
    exit 1
fi

# Find all repos.json files
for repos_json in "$SCRIPT_DIR"/../repos/*/repos.json; do
    if [ ! -f "$repos_json" ]; then
        continue
    fi

    org_dir=$(dirname "$repos_json")
    org_name=$(basename "$org_dir")

    echo "Processing organization: $org_name"

    # Extract repo names from repos.json using jq
    repo_names=$(jq -r '.[].full_name | split("/")[1]' "$repos_json")

    for repo_name in $repo_names; do
        repo_path="$org_dir/$repo_name"

        if [ ! -d "$repo_path" ]; then
            echo "  Skipping $repo_name (directory not found)"
            continue
        fi

        if [ -f "$repo_path/overview.json" ]; then
            echo "  Skipping $repo_name (overview.json already exists)"
            continue
        fi

        echo "  Generating overview for $org_name/$repo_name..."
        if "$SCRIPT_DIR/generate-repo-overview.sh" "$repo_path" > "$repo_path/overview.json"; then
            echo "    ✓ Created $repo_path/overview.json"
        else
            echo "    ✗ Failed to generate overview for $repo_name" >&2
            rm -f "$repo_path/overview.json"
        fi
    done
done

echo "Done!"
