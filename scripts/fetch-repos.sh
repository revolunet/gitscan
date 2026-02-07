#!/bin/bash

# fetch the list of repos of given organisations from the github API

set -e
set +x

# Colors for log output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Counters for summary
ORGS_PROCESSED=0
ORGS_FAILED=0
REPOS_TOTAL=0

# Log function with timestamp and level
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')

    case "$level" in
        INFO)    echo -e "${CYAN}[$timestamp]${NC} ${GREEN}[INFO]${NC}  $message" ;;
        WARN)    echo -e "${CYAN}[$timestamp]${NC} ${YELLOW}[WARN]${NC}  $message" ;;
        ERROR)   echo -e "${CYAN}[$timestamp]${NC} ${RED}[ERROR]${NC} $message" ;;
        DEBUG)   echo -e "${CYAN}[$timestamp]${NC} ${BLUE}[DEBUG]${NC} $message" ;;
        *)       echo -e "${CYAN}[$timestamp]${NC} $level $message" ;;
    esac
}

function fetch_org_repos() {
    ORG_NAME="$1"
    PAGES_COUNT=10

    TARGET_DIR="./repos/$ORG_NAME";

    log INFO "Creating target directory: $TARGET_DIR"
    mkdir -p "$TARGET_DIR"

    # fetch repos list with GitHub public API
    API_ERROR=false
    log INFO "Fetching repository list from GitHub API (up to $PAGES_COUNT pages)"
    for i in $(seq 1 $PAGES_COUNT); do
        log DEBUG "Fetching page $i/$PAGES_COUNT for org '$ORG_NAME'"
        RESPONSE=$(curl -s -L -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $GITHUB_TOKEN" "https://api.github.com/orgs/$ORG_NAME/repos?page=$i&type=public&per_page=100")

        # Check if response is an error (has "message" field indicating API error)
        if echo "$RESPONSE" | jq -e 'type == "object" and has("message")' > /dev/null 2>&1; then
            ERROR_MSG=$(echo "$RESPONSE" | jq -r '.message // "Unknown error"')
            log ERROR "GitHub API error for '$ORG_NAME' on page $i: $ERROR_MSG"
            API_ERROR=true
            break
        fi

        echo "$RESPONSE" > "$TARGET_DIR/repos-page$i.json"
        log DEBUG "Saved page $i to $TARGET_DIR/repos-page$i.json"
    done

    if [ "$API_ERROR" = true ]; then
        log WARN "Skipping repos.json and repos.txt due to API error"
        log DEBUG "Cleaning up partial page files"
        rm -f "$TARGET_DIR"/repos-page*.json
        ((ORGS_FAILED++)) || true
        return 1
    fi

    # download and assemble repos (filter to only public, non-archived repos)
    log INFO "Assembling repository data from fetched pages"
    FILES=($TARGET_DIR/repos-page*.json)
    jq -s 'add | map(select(type == "object" and .private == false and .archived == false)) | map({
        full_name,
        description,
        language,
        topics,
        open_issues,
        updated_at,
        clone_url
    })' "${FILES[@]}" > "$TARGET_DIR/repos.json"

    log INFO "Extracting repository URLs"
    jq -er ".[] .clone_url" "$TARGET_DIR/repos.json" > "$TARGET_DIR/repos.txt"
    URLS_COUNT=$(wc -l < "$TARGET_DIR/repos.txt" | tr -d ' ')
    log INFO "Found $URLS_COUNT repositories for org '$ORG_NAME'"
    REPOS_TOTAL=$((REPOS_TOTAL + URLS_COUNT))

    log DEBUG "Cleaning up temporary page files"
    rm -rf $TARGET_DIR/repos-page*

    ((ORGS_PROCESSED++)) || true
    log INFO "Completed fetching org '$ORG_NAME'"
}

log INFO "=========================================="
log INFO "Starting GitHub repository fetch"
log INFO "=========================================="

if [ -z "$GITHUB_TOKEN" ]; then
    log WARN "GITHUB_TOKEN is not set - API rate limits will apply"
fi

while IFS= read -r orga || [ -n "$orga" ]; do
    if [ -n "$orga" ]; then
        log INFO "------------------------------------------"
        log INFO "Processing GitHub organization: $orga"
        log INFO "------------------------------------------"
        fetch_org_repos "$orga" || log WARN "Failed to fetch org '$orga', continuing..."
    fi
done < "orgas.txt"

log INFO "=========================================="
log INFO "Fetch complete!"
log INFO "Organizations processed: $ORGS_PROCESSED"
log INFO "Organizations failed: $ORGS_FAILED"
log INFO "Total repositories found: $REPOS_TOTAL"
log INFO "=========================================="
