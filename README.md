# GitScan

Automated GitHub public repository scanner. Collects metadata, documentation, dependencies, and commit history from public repositories.

## Overview

GitScan monitors **9 French government GitHub organizations**:

| Organization                                                        | Description                            |
| ------------------------------------------------------------------- | -------------------------------------- |
| [betagouv](https://github.com/betagouv)                             | Beta.gouv.fr digital startup incubator |
| [socialgouv](https://github.com/socialgouv)                         | Ministry of Social Affairs             |
| [etalab](https://github.com/etalab)                                 | French government open data agency     |
| [etalab-ia](https://github.com/etalab-ia)                           | ETALAB AI initiatives                  |
| [codegouvfr](https://github.com/codegouvfr)                         | Code.gouv.fr platform                  |
| [suitenumerique](https://github.com/suitenumerique)                 | Digital Suite initiative               |
| [mtes-mct](https://github.com/mtes-mct)                             | Ministry for Ecological Transition     |
| [incubateur-ademe](https://github.com/incubateur-ademe)             | ADEME environmental incubator          |
| [incubateur-territoires](https://github.com/incubateur-territoires) | Territories incubator                  |

You can change that in [./orgas.txt](./orgas.txt)

## What It Extracts

For each repository:

- **README.md** and **CHANGELOG.md**
- **Dependencies**: `package.json`, `requirements.txt`, `pyproject.toml`
- **Docker configs**: `compose.yml`, `docker-compose.yml`
- **Commit history**: Last 90 days
- **File tree**: Compressed directory structure
- **GitHub metadata**: Languages, topics, issues count, etc.

## Data Structure

```
repos/
├── {org-name}/
│   ├── repos.json          # All org repositories metadata
│   ├── repos.txt           # Clone URLs list
│   └── {repo-name}/        # Per-repository data
│       ├── README.md
│       ├── github.json
│       ├── commits.txt
│       ├── tree.txt
│       └── package.json
└── ...
```

## Scripts

| Script                             | Description                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------- |
| [fetch-repos.sh](./fetch-repos.sh) | Fetches repository lists from all organizations in [orgas.txt](./orgas.txt) |
| [fetch-repo.sh](./fetch-repo.sh)   | Analyzes a single repository and extracts its data                          |
| [minitree.py](./minitree.py)       | Compresses `tree` output by grouping similar filenames                      |

## Usage

### Prerequisites

```bash
export GITHUB_TOKEN="your_github_token"
```

### Fetch all organization repository lists

```bash
./fetch-repos.sh
```

### Analyze a single repository

```bash
./fetch-repo.sh https://github.com/betagouv/moncomptepro
```

## GitHub Actions

The workflow runs daily at midnight UTC and can be triggered manually.

**Features:**

- Automatic scheduling with smart prioritization (new/outdated repos first)
- Parallel scanning (up to 3 repositories at a time)
- Auto-commits results back to the repository

**Manual trigger:** Go to Actions → "Scan repos" → Run workflow

## License

MIT
