# gitscan

Extract data from GIT repositories for analysis :

- README.md
- \*/package.json,pyproject.toml et autres
- commit log
- docker-compose\*

# Scripts

- `[fetch-repos.sh](./fetch-repos.sh)`: extrait une liste de repos GitHub et les analyse à partir de `[orgas.txt](./orgas.txt)`
- `[fetch-repo.sh](./fetch-repo.sh)` : extrait les données d'un repo particulier

# GitHub actions

The GitHub action can maintain the data in GIT autoamtically
