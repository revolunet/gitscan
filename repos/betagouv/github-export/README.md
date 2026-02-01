# github-export

Migrate GitHub organization repositories to Codeberg with full history, branches, issues, PRs, and more.

## Features

- Full repository migration (code, branches, tags)
- Issues, pull requests, labels, milestones, releases, and wikis
- Resumable migrations with state tracking
- Batch processing for large organizations
- Automatic retry with error classification

## Requirements

- Node.js >= 20.0.0
- GitHub personal access token (with repo scope)
- Codeberg personal access token

## Setup

```bash
npm install
npm run build
```

## Configuration

Edit `config/migration-config.json`:

```json
{
  "batchSize": 10,
  "maxParallelRepos": 5,
  "migrateOptions": {
    "issues": true,
    "pullRequests": true,
    "labels": true,
    "milestones": true,
    "releases": true,
    "wiki": true
  },
  "excludeRepos": [],
  "includeOnlyRepos": []
}
```

## Usage

Set environment variables:

```bash
export GH_SOURCE_TOKEN="github_token"
export CODEBERG_TOKEN="codeberg_token"
export GH_SOURCE_ORG="source-org"
export CODEBERG_TARGET_ORG="target-org"
```

Run migration:

```bash
# Migrate all repos
npm start

# Migrate specific repos
REPO_LIST="repo1,repo2" npm start

# Migrate single repo
REPO_NAME="my-repo" npm run migrate
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run full migration |
| `npm run migrate` | Migrate single repo (requires `REPO_NAME`) |
| `npm run discover` | Discover and batch repos from GitHub org |
| `npm run merge-states` | Merge state files from parallel runs |

## GitHub Actions Workflow

The `sync-orchestrator` workflow automates batch migrations.

### Workflow Inputs

| Input | Description | Default |
|-------|-------------|---------|
| `max_batches` | Maximum number of batches to run | `5` |
| `dry_run` | Discover repos but don't migrate | `false` |
| `exclude_inactive_days` | Exclude repos with no commits in the last X days (0 = no filter) | `0` |

### Examples

```yaml
# Run with default settings
gh workflow run sync-orchestrator

# Exclude repos inactive for more than 1 year
gh workflow run sync-orchestrator -f exclude_inactive_days=365

# Dry run to see which repos would be migrated
gh workflow run sync-orchestrator -f dry_run=true -f exclude_inactive_days=180
```

## License

MIT
