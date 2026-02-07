# GitScan

![GitScan workflow status](https://github.com/revolunet/gitscan/actions/workflows/scan.yaml/badge.svg?branch=main)

Automated GitHub public repository scanner. Collects metadata, documentation, dependencies, and commit history from public repositories. Optionally generates AI-powered structured overviews.

Demo frontend on https://revolunet.github.io/gitscan

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
- **AI Overview** (optional): Structured JSON with description, features, tech stack, and more

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
│       ├── package.json
│       └── overview.json   # AI-generated structured overview
└── ...
```

## Scripts

| Script                                                   | Description                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| [fetch-repos.sh](./fetch-repos.sh)                       | Fetches repository lists from all organizations in [orgas.txt](./orgas.txt) |
| [fetch-repo.sh](./fetch-repo.sh)                         | Analyzes a single repository and extracts its data                          |
| [minitree.py](./minitree.py)                             | Compresses `tree` output by grouping similar filenames                      |
| [generate-repo-overview.sh](./generate-repo-overview.sh) | Generates AI-powered overview for a single repository                       |
| [generate-overviews.sh](./generate-overviews.sh)         | Batch generates overviews for all repositories                              |

## Usage

### Prerequisites

```bash
export GITHUB_TOKEN="your_github_token"
```

For AI overview generation:

```bash
export OPENAI_API_KEY="your_openai_api_key"
# Optional: use a different OpenAI-compatible API
export OPENAI_BASE_URL="https://api.openai.com/v1"
export OPENAI_MODEL="gpt-4o"
```

### Fetch all organization repository lists

```bash
./fetch-repos.sh
```

### Analyze a single repository

```bash
./fetch-repo.sh https://github.com/betagouv/moncomptepro
```

### Generate AI overview for a repository

```bash
./generate-repo-overview.sh repos/betagouv/moncomptepro
```

### Generate overviews for all repositories

```bash
./generate-overviews.sh
```

## AI Overview Schema

The `overview.json` files follow a [JSON Schema](./schemas/repository.schema.json) with fields including:

| Field          | Description                                           |
| -------------- | ----------------------------------------------------- |
| `description`  | Concise project description (in French)               |
| `language`     | Primary programming language                          |
| `features`     | User-facing features and capabilities                 |
| `audience`     | Target users (public, professionals, admin agents...) |
| `dependencies` | Main frameworks, libraries, and services              |
| `components`   | Technical architecture components                     |
| `auth`         | Authentication methods and providers                  |
| `tests`        | Testing setup and frameworks                          |
| `workflows`    | CI/CD workflows                                       |
| `status`       | Maintenance status (active, archived, deprecated...)  |
| `license`      | SPDX license identifier                               |
| `metrics`      | Stars, forks, contributors, open issues               |
| `tags`         | Keywords for categorization                           |

## GitHub Actions

The workflow runs daily at midnight UTC and can be triggered manually.

**Features:**

- Automatic scheduling with smart prioritization (new/outdated repos first)
- Parallel scanning (up to 3 repositories at a time)
- Auto-commits results back to the repository

**Manual trigger:** Go to Actions → "Scan repos" → Run workflow

## License

MIT
