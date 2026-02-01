#!/bin/bash

# Generate repository overview using OpenAI API
# Usage: ./generate-overview.sh repos/[org]/[repo]
#
# Environment variables:
#   OPENAI_API_KEY   - Required: Your OpenAI API key
#   OPENAI_BASE_URL  - Optional: API base URL (default: https://api.openai.com/v1)
#   OPENAI_MODEL     - Optional: Model to use (default: gpt-4o)

set -e

# Configuration
OPENAI_BASE_URL="${OPENAI_BASE_URL:-https://api.openai.com/v1}"
OPENAI_MODEL="${OPENAI_MODEL:-gemma-3-27b-it}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCHEMA_FILE="$SCRIPT_DIR/schemas/repository.schema.json"

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

echo "Analyzing repository: $ORG_NAME/$REPO_NAME" >&2

# Token limit configuration
# Model limit: 40k tokens, minus 8192 completion, minus ~7500 for schema+prompt = ~24k tokens
# Using conservative 2.5 chars/token for code = ~60k chars max
MAX_CHARS=${MAX_CHARS:-40000}

# Truncate content to fit within available chars
truncate_content() {
    local content="$1"
    local max_chars="$2"
    local truncated="${content:0:$max_chars}"
    # Try to cut at last newline to avoid breaking mid-line
    local last_newline="${truncated%$'\n'*}"
    if [ ${#last_newline} -gt $((max_chars / 2)) ]; then
        truncated="$last_newline"
    fi
    echo "$truncated"$'\n[... truncated ...]'
}

# Gather repository context - include text files up to token limit
gather_context() {
    local repo="$1"
    local header="## Repository: $ORG_NAME/$REPO_NAME"$'\n\n'
    local total_chars=${#header}
    local output="$header"
    local min_file_chars=500  # Minimum chars to include for a truncated file

    # Priority files to include first
    local priority_files=(
        "README.md" "README" "readme.md"
        "package.json" "Cargo.toml" "go.mod" "pyproject.toml" "setup.py" "composer.json" "pom.xml" "build.gradle"
        ".env.example" "Dockerfile" "docker-compose.yml" "docker-compose.yaml"
    )

    # Collect all files
    local all_files=()
    while IFS= read -r file; do
        all_files+=("$file")
    done < <(find "$repo" -type f 2>/dev/null | sort)

    # Process priority files first
    local processed_files=()
    for priority in "${priority_files[@]}"; do
        for file in "${all_files[@]}"; do
            rel_path="${file#$repo/}"
            if [ "$(basename "$rel_path")" = "$priority" ] || [ "$rel_path" = "$priority" ]; then
                if [[ ! " ${processed_files[*]} " =~ " ${file} " ]]; then
                    content=$(cat "$file" 2>/dev/null || true)
                    file_header="## $rel_path"$'\n'
                    file_footer=$'\n\n'
                    header_footer_len=$((${#file_header} + ${#file_footer}))
                    content_chars=${#content}
                    file_chars=$((header_footer_len + content_chars))
                    remaining_chars=$((MAX_CHARS - total_chars))

                    if [ $file_chars -gt $remaining_chars ]; then
                        available_for_content=$((remaining_chars - header_footer_len - 20))
                        if [ $available_for_content -ge $min_file_chars ]; then
                            content=$(truncate_content "$content" "$available_for_content")
                            echo "Warning: Truncated $rel_path to fit context" >&2
                        else
                            continue
                        fi
                    fi

                    file_block="$file_header$content$file_footer"
                    output+="$file_block"
                    total_chars=$((total_chars + ${#file_block}))
                    processed_files+=("$file")
                fi
            fi
        done
    done

    # Files to process last (can be very large)
    local last_files=("tree.txt")

    # Process remaining files (except last_files)
    for file in "${all_files[@]}"; do
        if [[ " ${processed_files[*]} " =~ " ${file} " ]]; then
            continue
        fi

        rel_path="${file#$repo/}"
        basename_file=$(basename "$rel_path")

        # Skip files that should be processed last
        if [[ " ${last_files[*]} " =~ " ${basename_file} " ]]; then
            continue
        fi

        content=$(cat "$file" 2>/dev/null || true)
        file_header="## $rel_path"$'\n'
        file_footer=$'\n\n'
        header_footer_len=$((${#file_header} + ${#file_footer}))
        content_chars=${#content}
        file_chars=$((header_footer_len + content_chars))
        remaining_chars=$((MAX_CHARS - total_chars))

        if [ $file_chars -gt $remaining_chars ]; then
            # Check if we have enough space to include at least part of the file
            available_for_content=$((remaining_chars - header_footer_len - 20))  # 20 for truncation marker
            if [ $available_for_content -ge $min_file_chars ]; then
                content=$(truncate_content "$content" "$available_for_content")
                echo "Warning: Truncated $rel_path to fit context" >&2
            else
                echo "Warning: Reached token limit (~$((total_chars * 10 / 25)) tokens), skipping remaining files" >&2
                break
            fi
        fi

        file_block="$file_header$content$file_footer"
        output+="$file_block"
        total_chars=$((total_chars + ${#file_block}))
        processed_files+=("$file")
    done

    # Process last_files at the end (e.g., tree.txt)
    for last_file in "${last_files[@]}"; do
        for file in "${all_files[@]}"; do
            rel_path="${file#$repo/}"
            if [ "$(basename "$rel_path")" = "$last_file" ]; then
                if [[ ! " ${processed_files[*]} " =~ " ${file} " ]]; then
                    content=$(cat "$file" 2>/dev/null || true)
                    file_header="## $rel_path"$'\n'
                    file_footer=$'\n\n'
                    header_footer_len=$((${#file_header} + ${#file_footer}))
                    content_chars=${#content}
                    file_chars=$((header_footer_len + content_chars))
                    remaining_chars=$((MAX_CHARS - total_chars))

                    if [ $file_chars -gt $remaining_chars ]; then
                        available_for_content=$((remaining_chars - header_footer_len - 20))
                        if [ $available_for_content -ge $min_file_chars ]; then
                            content=$(truncate_content "$content" "$available_for_content")
                            echo "Warning: Truncated $rel_path to fit context" >&2
                        else
                            echo "Warning: Skipping $last_file (not enough space remaining)" >&2
                            continue
                        fi
                    fi

                    file_block="$file_header$content$file_footer"
                    output+="$file_block"
                    total_chars=$((total_chars + ${#file_block}))
                    processed_files+=("$file")
                fi
            fi
        done
    done

    echo "Context size: ~$((total_chars * 10 / 25)) tokens ($total_chars chars)" >&2
    echo "$output"
}

# Read schema
if [ ! -f "$SCHEMA_FILE" ]; then
    echo "Error: Schema file not found: $SCHEMA_FILE" >&2
    exit 1
fi

SCHEMA=$(cat "$SCHEMA_FILE")

# Gather context from repository
CONTEXT=$(gather_context "$REPO_PATH")

# Prepare the prompt
PROMPT="You are a software analyst. Analyze the following repository information and generate a JSON object that conforms to the provided JSON schema.

Based on the repository files and structure provided below, extract and infer as much information as possible to fill in the schema fields.

Instructions for each field:
- url: Use \"https://github.com/$ORG_NAME/$REPO_NAME\"
- name: Use \"$REPO_NAME\"
- description: Write a concise description (1-3 sentences) of the project's purpose in French
- language: Identify the primary programming language (Python, TypeScript, JavaScript, Go, Rust, Java, etc.)
- features: List user-facing features/capabilities (e.g., \"Authentification utilisateur\", \"Recherche\", \"Notifications\")
- audience: Identify target users (\"Grand public\", \"Professionnels\", \"Agents de l'Administration\", \"Associations\")
- dependencies: List main frameworks, libraries, and services (e.g., React, Express, PostgreSQL, Redis)
- components: Describe technical architecture components (e.g., \"Frontend React\", \"API REST\", \"Base de données PostgreSQL\")
- auth.methods: Use values from: email-password, oauth2, saml, ldap, api-key, jwt, session, magic-link, passkey, mfa, sso, none
- auth.providers: List OAuth/SSO providers if applicable (Google, GitHub, Microsoft, etc.)
- tests: Describe testing setup (frameworks used like Jest, Pytest, Cypress)
- workflows: List CI/CD workflows from .github/workflows or similar
- lastActivity: Use the most recent commit date from commits.txt in ISO 8601 format
- status: Use one of: active, maintained, minimal-maintenance, archived, deprecated, experimental, unknown
- license: Use SPDX identifier (MIT, Apache-2.0, GPL-3.0, AGPL-3.0, etc.) or null
- hasDocumentation: true if README or docs folder exists
- metrics: Extract stars, forks, contributors, openIssues from github.json if available
- tags: Add relevant keywords for categorization

Important:
- Use French for description, features, audience, and components
- Output ONLY valid JSON, no markdown code blocks or explanations
- Omit fields you cannot determine rather than guessing

JSON Schema:
$SCHEMA

Repository Information:
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
  "temperature": 0.1,
  "response_format": { "type": "json_object" }
}
EOF
)

# Make API request
echo "Sending request to OpenAI API..." >&2

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

# Extract the generated JSON from the response
GENERATED_JSON=$(echo "$RESPONSE_BODY" | jq -r '.choices[0].message.content')

if [ -z "$GENERATED_JSON" ] || [ "$GENERATED_JSON" = "null" ]; then
    echo "Error: Failed to extract generated content from response" >&2
    echo "$RESPONSE_BODY" >&2
    exit 1
fi

# Output the generated JSON (pretty-printed)
echo "$GENERATED_JSON" | jq .
