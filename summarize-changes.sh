#!/bin/bash

# Summarize a CHANGELOG-generated.md file, focusing on notable changes
# Reads changelog content from stdin and outputs a concise summary to stdout
#
# Usage:
#   cat repos/betagouv/some-repo/CHANGELOG-generated.md | ./summarize-changes.sh
#   ./summarize-changes.sh < repos/betagouv/some-repo/CHANGELOG-generated.md
#
# Environment variables:
#   OPENAI_API_KEY   - Required: Your OpenAI API key
#   OPENAI_BASE_URL  - Optional: API base URL (default: https://api.openai.com/v1)
#   OPENAI_MODEL     - Optional: Model to use (default: gemma-3-27b-it)

set -e

# Configuration
OPENAI_BASE_URL="${OPENAI_BASE_URL:-https://api.openai.com/v1}"
OPENAI_MODEL="${OPENAI_MODEL:-gemma-3-27b-it}"
MAX_INPUT_CHARS="${MAX_INPUT_CHARS:-100000}"

# Check required environment variable
if [ -z "$OPENAI_API_KEY" ]; then
    echo "Error: OPENAI_API_KEY environment variable is required" >&2
    exit 1
fi

# Read changelog from stdin
CHANGELOG=$(cat)

if [ -z "$CHANGELOG" ]; then
    echo "Error: No input received on stdin" >&2
    echo "Usage: cat repos/org/repo/CHANGELOG-generated.md | $0" >&2
    exit 1
fi

INPUT_SIZE=${#CHANGELOG}
echo "Input size: ${INPUT_SIZE} chars" >&2

# Truncate if needed
if [ "$INPUT_SIZE" -gt "$MAX_INPUT_CHARS" ]; then
    CHANGELOG=$(echo "$CHANGELOG" | head -c "$MAX_INPUT_CHARS")
    CHANGELOG+=$'\n[... tronqué ...]'
    echo "Warning: Input truncated to ${MAX_INPUT_CHARS} chars" >&2
fi

# Prepare the prompt
PROMPT="Tu es un analyste logiciel spécialisé dans la synthèse de changelogs.

Tu reçois un changelog détaillé d'un ou plusieurs dépôts logiciels. Ton objectif est de produire un résumé concis et pertinent des changements notables, en ignorant le bruit.

Génère un résumé en français avec la structure markdown suivante :

## Changements notables

Les évolutions importantes pour les utilisateurs et le produit : nouvelles fonctionnalités, améliorations significatives, corrections de bugs critiques.

## Changements techniques notables

Uniquement les changements techniques majeurs qui méritent attention : migrations, changements d'architecture, améliorations de sécurité. Omets cette section s'il n'y a rien de notable.

Instructions :
- Rédige entièrement en français
- Utilise des puces (tirets) pour lister les changements
- Sois très concis : 5 à 15 lignes maximum au total
- IGNORE complètement les éléments suivants :
  - Mises à jour de dépendances (bumps dependabot/renovate)
  - Changements de CI/CD mineurs
  - Refactoring cosmétique ou nettoyage de code
  - Mises à jour de documentation mineures
  - Changements de configuration sans impact utilisateur
  - Corrections de typos ou de style
- Ne mentionne que ce qui a un impact réel sur le produit ou ses utilisateurs
- Mentionne les numéros de PR/issue quand disponibles avec les liens github (ex: #1234)
- Ne génère que le markdown, sans blocs de code englobants
- Si le changelog ne contient que de la maintenance, réponds simplement : \"Aucun changement notable — maintenance uniquement.\"

Changelog à résumer :

$CHANGELOG"

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

# Extract the generated content
SUMMARY=$(echo "$RESPONSE_BODY" | jq -r '.choices[0].message.content')

if [ -z "$SUMMARY" ] || [ "$SUMMARY" = "null" ]; then
    echo "Error: Failed to extract generated content from response" >&2
    echo "$RESPONSE_BODY" >&2
    exit 1
fi

# Output the summary
echo "$SUMMARY"
