#!/bin/bash

# fetch the list of repos of given organisations from the github API

set -e
set +x

function fetch_org_repos() {
    ORG_NAME="$1"

    TARGET_DIR="./repos/$ORG_NAME";

    mkdir -p "$TARGET_DIR"

    # fetch repos list with GitHub public API
    for i in $(seq 1 $PAGES_COUNT); do
        curl  -L -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $GITHUB_TOKEN" "https://api.github.com/orgs/$ORG_NAME/repos?page=$i&type=public&per_page=100" > "repos-page$i.json";
    done

    # download and assemble repos
    FILES=(./repos-page*.json)
    jq -s 'add | map({
        full_name,
        description,
        language,
        topics,
        open_issues,
        updated_at,
        clone_url
    })' "${FILES[@]}" > "$TARGET_DIR/repos.json"

    echo "extract urls"
    jq -er ".[] .clone_url" "$TARGET_DIR/repos.json" > "$TARGET_DIR/repos.txt"

    echo "cleanup"
    rm -rf ./repos-page*

}


while IFS= read -r line || [ -n "$line" ]; do
    if [ -n "$line" ]; then
        echo "Fetch GitHub orga $line"
        #fetch_org_repos $line
        while IFS= read -r line2 || [ -n "$line2" ]; do
            if [ -n "$line2" ]; then
                echo "Fetch repo $line2"
                ./fetch-repo.sh $line2
            fi
        done < "./repos/$line/repos.txt"
    fi
done < "orgas.txt"
