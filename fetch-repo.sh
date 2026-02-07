#!/bin/bash

# Script d'analyse de dépôt Git
# Usage: ./analyze_repo.sh <URL_GIT>

set -e
set +x

# Vérification des arguments
if [ $# -eq 0 ]; then
    echo "Usage: $0 <URL_GIT>"
    echo "Exemple: $0 https://github.com/user/repo.git"
    exit 1
fi

GIT_URL="$1"

# Extraction du nom du dépôt depuis l'URL
REPO_NAME=$(basename "$GIT_URL" .git)

# Extraire la partie avant le dernier '/' puis prendre le dernier élément (organisation)
REPO_OWNER=$(basename "$(dirname "$GIT_URL")")

# Création du dossier de résultats
RESULTS_DIR="$PWD/repos/${REPO_OWNER}/${REPO_NAME}"

TEMP_CLONE_DIR="/tmp/git_clone_${REPO_NAME}_$$"
MINITREE="$PWD/minitree.py"

echo "=== Analyse du dépôt: $REPO_NAME ==="
echo "Dossier de résultats: $RESULTS_DIR"

# Création du dossier de résultats (écrase s'il existe déjà)
mkdir -p "$RESULTS_DIR"

# Nettoyage du dossier temporaire si existant
rm -rf "$TEMP_CLONE_DIR"

# Clonage du dépôt dans un dossier temporaire
echo "Clonage du dépôt..."
git clone --depth 300 "$GIT_URL" "$TEMP_CLONE_DIR"

cd "$TEMP_CLONE_DIR"

# Récupération du README.md
echo "Récupération du README.md..."
if [ -f "README.md" ]; then
    cp "README.md" "$RESULTS_DIR/"
    echo "✓ README.md copié"
else
    echo "⚠ README.md non trouvé"
fi

# Récupération du CHANGELOG.md
echo "Récupération du CHANGELOG.md..."
if [ -f "CHANGELOG.md" ]; then
    cp "CHANGELOG.md" "$RESULTS_DIR/"
    echo "✓ CHANGELOG.md copié"
else
    echo "⚠ CHANGELOG.md non trouvé"
fi

# Récupération de tous les fichiers de configuration
echo "Recherche des fichiers de configuration..."

# package.json
find . -name "package.json" -type f | while read -r file; do
    rel_path="${file#./}"
    dest_path="$RESULTS_DIR/${rel_path//\//_}"
    cp "$file" "$dest_path"
    echo "✓ Copié: $rel_path -> $(basename $dest_path)"
done

# requirements.txt
find . -name "requirements.txt" -type f | while read -r file; do
    rel_path="${file#./}"
    dest_path="$RESULTS_DIR/${rel_path//\//_}"
    cp "$file" "$dest_path"
    echo "✓ Copié: $rel_path -> $(basename $dest_path)"
done

# pyproject.toml
find . -name "pyproject.toml" -type f | while read -r file; do
    rel_path="${file#./}"
    dest_path="$RESULTS_DIR/${rel_path//\//_}"
    cp "$file" "$dest_path"
    echo "✓ Copié: $rel_path -> $(basename $dest_path)"
done

# compose.yml
find . -name "compose.yml" -type f | while read -r file; do
    rel_path="${file#./}"
    dest_path="$RESULTS_DIR/${rel_path//\//_}"
    cp "$file" "$dest_path"
    echo "✓ Copié: $rel_path -> $(basename $dest_path)"
done

# docker-compose.yml
find . -name "docker-compose.yml" -type f | while read -r file; do
    rel_path="${file#./}"
    dest_path="$RESULTS_DIR/${rel_path//\//_}"
    cp "$file" "$dest_path"
    echo "✓ Copié: $rel_path -> $(basename $dest_path)"
done

# Génération de l'arborescence avec tree
echo "Génération de l'arborescence..."
if command -v tree &> /dev/null; then
    tree -a -I '.git' | $MINITREE > "$RESULTS_DIR/tree.txt"
    echo "✓ tree.txt généré"
else
    echo "⚠ Erreur sur le git log"
    exit 1
fi

# Récupération des commits des 90 derniers jours
echo "Récupération des commits des 90 derniers jours..."
if command -v git log &> /dev/null; then
    NEW_COMMITS_TMP=$(mktemp)
    git log --since="90 days ago" --pretty=tformat:"%cI - %h - %an : %s" > "$NEW_COMMITS_TMP"

    if [ -f "$RESULTS_DIR/commits.txt" ]; then
        # Merge new commits with existing ones, deduplicate by commit hash, sort by date
        MERGED_TMP=$(mktemp)
        cat "$NEW_COMMITS_TMP" "$RESULTS_DIR/commits.txt" | \
            awk -F' - ' '!seen[$2]++' | \
            sort -r > "$MERGED_TMP"
        mv "$MERGED_TMP" "$RESULTS_DIR/commits.txt"
        echo "✓ commits.txt mis à jour (nouveaux commits ajoutés)"
    else
        mv "$NEW_COMMITS_TMP" "$RESULTS_DIR/commits.txt"
        echo "✓ commits.txt généré"
    fi
    rm -f "$NEW_COMMITS_TMP" 2>/dev/null
else
    echo "⚠ git log non disponible"
fi

# Récupération des infos GitHub
echo "Récupération des infos GitHub..."
# Supprimer le .git final s'il existe
GITHUB_URL="${GIT_URL%.git}"

# Extraire la partie après le dernier '/' (nom du repo)
GITHUB_REPO=$(basename "$GITHUB_URL")

# Extraire la partie avant le dernier '/' puis prendre le dernier élément (organisation)
REPO_OWNER=$(basename "$(dirname "$GITHUB_URL")")

GITHUB_RESPONSE=$(curl -s -w "\n%{http_code}" -L -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME})
HTTP_CODE=$(echo "$GITHUB_RESPONSE" | tail -n1)
GITHUB_BODY=$(echo "$GITHUB_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "401" ]; then
    echo "⚠ GitHub API returned 401 (Unauthorized) - github.json not updated"
else
    echo "$GITHUB_BODY" > "$RESULTS_DIR/github.json"
    echo "✓ github.json généré"
fi

# Retour au dossier d'origine
cd - > /dev/null

# Nettoyage du dossier temporaire
echo "Nettoyage..."
rm -rf "$TEMP_CLONE_DIR"

echo ""
echo "=== Analyse terminée avec succès ==="
echo "Résultats disponibles dans: $RESULTS_DIR"
echo ""
echo "Fichiers générés:"
ls -lh "$RESULTS_DIR"