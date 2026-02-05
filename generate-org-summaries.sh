#!/bin/bash

# Generate org-level changelog summaries from individual repo changelogs
# For each org in repos/*, finds CHANGELOG-generated.md files committed
# in the last 7 days and produces a summary at repos/[org]/CHANGELOG-generated.md
#
# Environment variables:
#   OPENAI_API_KEY   - Required: Your OpenAI API key
#   OPENAI_BASE_URL  - Optional: API base URL (default: https://api.openai.com/v1)
#   OPENAI_MODEL     - Optional: Model to use (default: gemma-3-27b-it)
#   DAYS             - Optional: Number of days to look back (default: 7)

set -e

# Script directory for calling sibling scripts
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Configuration
OPENAI_BASE_URL="${OPENAI_BASE_URL:-https://api.openai.com/v1}"
OPENAI_MODEL="${OPENAI_MODEL:-gemma-3-27b-it}"
DAYS="${DAYS:-7}"
# ~40K tokens limit: conservative estimate at ~3 chars/token for French text
MAX_CONTEXT_CHARS="${MAX_CONTEXT_CHARS:-100000}"
# Changelogs larger than this will be summarized via summarize-changes.sh
MAX_ENTRY_CHARS="${MAX_ENTRY_CHARS:-3000}"

# Check required environment variable
if [ -z "$OPENAI_API_KEY" ]; then
    echo "Error: OPENAI_API_KEY environment variable is required" >&2
    exit 1
fi

# Compute cutoff date in a portable way
if date -v -1d > /dev/null 2>&1; then
    # macOS
    CUTOFF_DATE=$(date -v -${DAYS}d -u +%Y-%m-%dT%H:%M:%SZ)
else
    # GNU/Linux
    CUTOFF_DATE=$(date -u -d "$DAYS days ago" +%Y-%m-%dT%H:%M:%SZ)
fi

echo "Generating org summaries for changelogs committed since: $CUTOFF_DATE"

ORG_COUNT=0
ORG_ERRORS=0

for org_dir in ./repos/*; do
    [ -d "$org_dir" ] || continue

    ORG_NAME=$(basename "$org_dir")

    # [ -f "$org_dir/CHANGELOG-generated.md" ] && {
    #     echo "--- SKIP $ORG_NAME (existing CHANGELOG-generated.md)"
    #     continue
    # }

    [ $ORG_NAME == "betagouv" ] || continue

    # Collect eligible changelog files for this org
    ELIGIBLE_FILES=()
    for changelog_file in "$org_dir"/*/CHANGELOG-generated.md; do
        [ -f "$changelog_file" ] || continue

        # Check if the file was committed within the last DAYS days
        changelog_git_date=$(git log -1 --format="%aI" -- "$changelog_file" 2>/dev/null || true)

        if [ -z "$changelog_git_date" ]; then
            # File not yet committed, include it (it's new/pending)
            :
        elif [[ "$changelog_git_date" < "$CUTOFF_DATE" ]]; then
            continue
        fi

        content=$(cat "$changelog_file")
        if [ -n "$content" ]; then
            ELIGIBLE_FILES+=("$changelog_file")
        fi
    done

    TOTAL_ELIGIBLE=${#ELIGIBLE_FILES[@]}

    # Accumulate changelogs up to the context limit
    CHANGELOGS=""
    CHANGELOG_COUNT=0
    CHANGELOGS_SIZE=0

    for changelog_file in "${ELIGIBLE_FILES[@]}"; do
        repo_name=$(basename "$(dirname "$changelog_file")")
        content=$(cat "$changelog_file")

        # Summarize large changelogs to save context space
        if [ ${#content} -gt "$MAX_ENTRY_CHARS" ]; then
            echo "  Summarizing $repo_name (${#content} chars)..." >&2
            summarized=$(echo "$content" | "$SCRIPT_DIR/summarize-changes.sh" 2>/dev/null || true)
            echo "summarized: $summarized"
            if [ -n "$summarized" ]; then
                content="$summarized"
            fi
        fi

        entry="--- REPO: $repo_name ---"$'\n'"$content"$'\n\n'
        entry_size=${#entry}

        # Check if adding this changelog would exceed the context limit
        if [ $((CHANGELOGS_SIZE + entry_size)) -gt "$MAX_CONTEXT_CHARS" ]; then
            remaining=$((MAX_CONTEXT_CHARS - CHANGELOGS_SIZE))
            if [ "$remaining" -gt 200 ]; then
                CHANGELOGS+=$(echo "$entry" | head -c "$remaining")
                CHANGELOGS+=$'\n[... tronqué ...]\n\n'
                CHANGELOG_COUNT=$((CHANGELOG_COUNT + 1))
            fi
            break
        fi

        CHANGELOGS+="$entry"
        CHANGELOGS_SIZE=$((CHANGELOGS_SIZE + entry_size))
        CHANGELOG_COUNT=$((CHANGELOG_COUNT + 1))
    done

    CHANGELOGS_SKIPPED=$((TOTAL_ELIGIBLE - CHANGELOG_COUNT))
    if [ "$CHANGELOGS_SKIPPED" -gt 0 ]; then
        echo "  Warning: $CHANGELOGS_SKIPPED/$TOTAL_ELIGIBLE changelogs skipped (context limit: ${MAX_CONTEXT_CHARS} chars)" >&2
    fi

    if [ "$TOTAL_ELIGIBLE" -eq 0 ]; then
        echo "--- SKIP $ORG_NAME (no recent changelogs)"
        continue
    fi

    echo "--- $ORG_NAME: $CHANGELOG_COUNT/$TOTAL_ELIGIBLE changelogs included (${CHANGELOGS_SIZE} chars)"

    # Prepare the prompt
    PROMPT="Tu es un analyste logiciel spécialisé dans la synthèse d'activité d'organisations open-source.

Tu reçois les changelogs individuels des dépôts de l'organisation \"$ORG_NAME\" mis à jour au cours des $DAYS derniers jours.

Génère une synthèse globale en français avec la structure markdown suivante :

# Synthèse d'activité : $ORG_NAME (derniers $DAYS jours)

## Résumé de l'activité
Un ou deux paragraphes résumant l'activité récente de l'organisation de manière accessible pour des décideurs, product owners ou parties prenantes non techniques. Mets en avant les évolutions produit, les nouveaux usages, et l'impact pour les utilisateurs finaux. Cite les dépôts avec [nom du repo](/repos/$ORG_NAME/[repo]).

## Sécurité
Les changements liés à la sécurité : corrections de vulnérabilités, améliorations de l'authentification, etc. Cite les dépôts avec [nom du repo](/repos/$ORG_NAME/[repo]).  Omets cette section s'il n'y a rien à signaler.

## Autres changements notables
Les évolutions techniques majeures, migrations, refactoring importants, changements d'infrastructure qui méritent d'être mentionnés. Cite les dépôts avec [nom du repo](/repos/$ORG_NAME/[repo]).Omets cette section s'il n'y a rien à signaler.

## Dépôts les plus actifs
Un récapitulatif sous forme de liste des dépôts les plus actifs avec une phrase résumant leur activité principale sur la période. Cite les dépôts avec [nom du repo](/repos/$ORG_NAME/[repo]).

Instructions :
- Rédige entièrement en français
- Utilise des puces (tirets) pour lister les changements
- Utilise ce format pour citer les dépôts [nom du repo](/repos/$ORG_NAME/[repo])
- Ignore les mises à jour de dépendances de routine (bumps dependabot/renovate)
- Sois synthétique : il s'agit d'un résumé, pas d'une répétition de chaque changelog
- Regroupe les informations par thème plutôt que par dépôt quand c'est pertinent
- Ne génère que le markdown, sans blocs de code englobants
- Si une section est vide, n'affiche pas la section

Voici les changelogs individuels :

$CHANGELOGS"

    # Escape the prompt for JSON
    ESCAPED_PROMPT=$(echo "$PROMPT" | jq -Rs .)

    # Prepare request body
    REQUEST_BODY=$(cat <<EOF
{
  "model": "$OPENAI_MODEL",
  "messages": [
    {
      "role": "user",
      "content": $ESCAPED_PROMPT
    }
  ],
  "temperature": 0.3
}
EOF
)

    # Make API request
    echo "Sending request to API ($OPENAI_MODEL) for $ORG_NAME..." >&2

    RESPONSE=$(curl -s -w "\n%{http_code}" \
        -X POST "$OPENAI_BASE_URL/chat/completions" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $OPENAI_API_KEY" \
        -d "$REQUEST_BODY")

    # Extract HTTP status code and response body
    HTTP_CODE=$(echo "$RESPONSE" | tail -1)
    RESPONSE_BODY=$(echo "$RESPONSE" | sed '$d')

    # Check for errors
    if [ "$HTTP_CODE" != "200" ]; then
        echo "Error: API request failed with status $HTTP_CODE for $ORG_NAME" >&2
        echo "$RESPONSE_BODY" >&2
        ORG_ERRORS=$((ORG_ERRORS + 1))
        continue
    fi

    # Extract the generated content
    SUMMARY=$(echo "$RESPONSE_BODY" | jq -r '.choices[0].message.content')

    if [ -z "$SUMMARY" ] || [ "$SUMMARY" = "null" ]; then
        echo "Error: Failed to extract generated content for $ORG_NAME" >&2
        echo "$RESPONSE_BODY" >&2
        ORG_ERRORS=$((ORG_ERRORS + 1))
        continue
    fi

    # Write the summary
    echo "$SUMMARY" > "$org_dir/CHANGELOG-generated.md"
    echo "Written: $org_dir/CHANGELOG-generated.md" >&2

    ORG_COUNT=$((ORG_COUNT + 1))
done

echo "Done: $ORG_COUNT org summaries generated, $ORG_ERRORS errors"
