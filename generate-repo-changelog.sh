#!/bin/bash

# Generate repository changelog using OpenAI-compatible API
# Usage: ./generate-repo-changelog.sh repos/[org]/[repo]
#
# Environment variables:
#   OPENAI_API_KEY   - Required: Your OpenAI API key
#   OPENAI_BASE_URL  - Optional: API base URL (default: https://api.openai.com/v1)
#   OPENAI_MODEL     - Optional: Model to use (default: gemma-3-27b-it)
#   DAYS             - Optional: Number of days to look back (default: 30)

set -e

# Configuration
OPENAI_BASE_URL="${OPENAI_BASE_URL:-https://api.openai.com/v1}"
OPENAI_MODEL="${OPENAI_MODEL:-gemma-3-27b-it}"
DAYS="${DAYS:-30}"

# Check required environment variable
if [ -z "$OPENAI_API_KEY" ]; then
    echo "Error: OPENAI_API_KEY environment variable is required" >&2
    exit 1
fi

# Check arguments
if [ $# -lt 1 ]; then
    echo "Usage: $0 repos/[org]/[repo]" >&2
    echo "Example: $0 repos/betagouv/aides-jeunes" >&2
    exit 1
fi

REPO_PATH="$1"

# Validate repo path
if [ ! -d "$REPO_PATH" ]; then
    echo "Error: Directory not found: $REPO_PATH" >&2
    exit 1
fi

# Extract org and repo name from path
REPO_NAME=$(basename "$REPO_PATH")
ORG_NAME=$(basename "$(dirname "$REPO_PATH")")

echo "Generating changelog for: $ORG_NAME/$REPO_NAME (last $DAYS days)" >&2

# Compute cutoff date (30 days ago) in a portable way
if date -v -1d > /dev/null 2>&1; then
    # macOS
    CUTOFF_DATE=$(date -v -${DAYS}d -u +%Y-%m-%dT%H:%M:%SZ)
else
    # GNU/Linux
    CUTOFF_DATE=$(date -u -d "$DAYS days ago" +%Y-%m-%dT%H:%M:%SZ)
fi

echo "Cutoff date: $CUTOFF_DATE" >&2

# Filter commits from the last N days
filter_recent_commits() {
    local commits_file="$1"
    if [ ! -f "$commits_file" ]; then
        echo ""
        return
    fi

    local result=""
    while IFS= read -r line; do
        # Extract the timestamp (first field before " - ")
        local timestamp
        timestamp=$(echo "$line" | sed 's/^ *[0-9]*→//' | cut -d' ' -f1)
        if [ -z "$timestamp" ]; then
            continue
        fi
        # Compare dates lexicographically (ISO 8601 sorts correctly)
        # Normalize to comparable format by taking first 19 chars
        local normalized
        normalized=$(echo "$timestamp" | cut -c1-19 | tr 'T' ' ')
        local cutoff_normalized
        cutoff_normalized=$(echo "$CUTOFF_DATE" | cut -c1-19 | tr 'T' ' ')

        if [[ "$normalized" > "$cutoff_normalized" ]] || [[ "$normalized" == "$cutoff_normalized" ]]; then
            result+="$line"$'\n'
        fi
    done < "$commits_file"

    echo "$result"
}

# Gather recent commits
COMMITS_FILE="$REPO_PATH/commits.txt"
RECENT_COMMITS=$(filter_recent_commits "$COMMITS_FILE")

if [ -z "$RECENT_COMMITS" ]; then
    echo "No commits found in the last $DAYS days for $ORG_NAME/$REPO_NAME" >&2
    exit 0
fi

COMMIT_COUNT=$(echo "$RECENT_COMMITS" | grep -c . || true)
echo "Found $COMMIT_COUNT commits in the last $DAYS days" >&2

# Gather additional context
CONTEXT="## Repository: $ORG_NAME/$REPO_NAME"$'\n\n'

# Add overview.json for project context
if [ -f "$REPO_PATH/overview.json" ]; then
    CONTEXT+="## overview.json"$'\n'
    CONTEXT+=$(cat "$REPO_PATH/overview.json")
    CONTEXT+=$'\n\n'
fi

# Add recent commits
CONTEXT+="## Recent commits (last $DAYS days)"$'\n'
CONTEXT+="$RECENT_COMMITS"
CONTEXT+=$'\n\n'
 
# Add existing CHANGELOG.md for reference style
if [ -f "$REPO_PATH/CHANGELOG.md" ]; then
    # Only include first 3000 chars to stay within limits
    CONTEXT+="## CHANGELOG.md (existing, for reference)"$'\n'
    CONTEXT+=$(head -c 3000 "$REPO_PATH/CHANGELOG.md")
    CONTEXT+=$'\n\n'
fi

CURRENT_DATE=date

echo "Context size: ${#CONTEXT} chars" >&2

# Prepare the prompt
PROMPT="Tu es un analyste logiciel spécialisé dans la rédaction de changelogs clairs et accessibles.

Analyse les commits récents (derniers $DAYS jours) du dépôt $ORG_NAME/$REPO_NAME et génère un changelog complet en français.

Date actuelle: $CURRENT_DATE

Utilise la structure suivante en markdown :

## Changelog : $REPO_NAME (derniers $DAYS jours)

### Résumé
Un paragraphe d'introduction non technique résumant les évolutions récentes du projet. Ce résumé doit être compréhensible par une personne non technique (product owner, décideur, utilisateur final).

### Évolutions fonctionnelles
Les changements visibles pour les utilisateurs : nouvelles fonctionnalités, améliorations de l'interface, corrections de bugs impactant l'expérience utilisateur.

### Évolutions techniques
Les changements d'architecture, refactoring, optimisations de performance, mises à jour d'infrastructure, CI/CD, etc.

### Autres changements
Tout ce qui ne rentre pas dans les catégories précédentes : documentation, configuration, nettoyage de code, etc. Omettre cette section s'il n'y a rien à signaler.

Instructions :
- Rédige entièrement en français
- Utilise des puces (tirets) pour lister les changements
- Ignore les mises à jour de dépendances de routine (bumps dependabot/renovate)
- Mentionne les numéros de PR/issue quand disponibles avec le lien github (ex: #1234)
- Regroupe les changements similaires (ex: plusieurs bumps dependabot)
- Si une section est vide, n'affiche pas la section
- Ne génère que le markdown, sans blocs de code englobants
- Sois concis mais informatif

Informations du dépôt :
$CONTEXT"

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
echo "Sending request to API ($OPENAI_MODEL)..." >&2

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
    echo "Error: API request failed with status $HTTP_CODE" >&2
    echo "$RESPONSE_BODY" >&2
    exit 1
fi

# Extract the generated content from the response
CHANGELOG=$(echo "$RESPONSE_BODY" | jq -r '.choices[0].message.content')

if [ -z "$CHANGELOG" ] || [ "$CHANGELOG" = "null" ]; then
    echo "Error: Failed to extract generated content from response" >&2
    echo "$RESPONSE_BODY" >&2
    exit 1
fi

# Output the changelog
echo "$CHANGELOG"