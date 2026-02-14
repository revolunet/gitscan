# infomed-html-parser

Parser for ANSM medication HTML documents (Notices and RCPs).

## Installation

```bash
poetry install
```

## Usage

The CLI supports two modes: **local** (for development) and **s3** (for production).

### Local Mode

Process HTML files from a local directory:

```bash
poetry run infomed-html-parser local <html_folder> [options]
```

Arguments:
- `html_folder`: Directory containing HTML files (N*.htm for Notices, R*.htm for RCPs)

Options:
- `--cis-file`: Text file with allowed CIS codes (default: uses database)
- `--output, -o`: Output JSONL file (default: output.jsonl)
- `--limite`: Limit number of files to process (for testing)
- `--processes`: Number of parallel processes (default: CPU count)
- `--pattern`: File pattern - N=Notice, R=RCP (default: N)

Example:
```bash
# Uses database for CIS list (Specialite.isBdm)
poetry run infomed-html-parser local ./html_files -o output.jsonl --pattern N

# With CIS file override
poetry run infomed-html-parser local ./html_files --cis-file cis_list.txt -o output.jsonl
```

### S3 Mode

Process HTML files from S3 (Clever Cloud Cellar) and write results back to S3:

```bash
poetry run infomed-html-parser s3 [options]
```

Options:
- `--cis-file`: Text file with allowed CIS codes (default: uses database)
- `--limite`: Limit number of files to process (for testing)
- `--pattern`: File pattern - N=Notice, R=RCP (default: N)
- `--batch-size`: Files per batch (default: 500). Results are written after each batch to limit memory usage.

Example:
```bash
poetry run infomed-html-parser s3 --pattern R --limite 100
```

### Global Options

- `--verbose, -v`: Enable debug logging

## Environment Variables

### S3/Cellar Configuration

- `S3_HOST`: S3 endpoint URL (default: https://cellar-c2.services.clever-cloud.com)
- `S3_KEY_ID`: S3 access key (required for S3 mode)
- `S3_KEY_SECRET`: S3 secret key (required for S3 mode)
- `S3_BUCKET_NAME`: Bucket name (default: info-medicaments)
- `S3_HTML_NOTICE_PREFIX`: Prefix for Notice HTML files (default: imports/notice/)
- `S3_HTML_RCP_PREFIX`: Prefix for RCP HTML files (default: imports/rcp/)
- `S3_OUTPUT_PREFIX`: Prefix for output files (default: exports/parsed/)

### Database Configuration

The database is used for two purposes:
1. **CIS list**: By default, authorized CIS codes are loaded from `SELECT SpecId FROM Specialite WHERE isBdm`
2. **Filename mapping**: Maps HTML filenames to CIS codes via the `Spec_Doc` and `Document` tables

Two configuration formats are supported:

**Option 1: Connection URL (recommended for Scalingo)**
- `DATABASE_URL` or `SCALINGO_MYSQL_URL`: Full connection string (e.g., `mysql://user:pass@host:port/database`)

**Option 2: Individual variables (for local development)**
- `MYSQL_HOST` (default: localhost)
- `MYSQL_USER` (default: root)
- `MYSQL_PASSWORD` (default: mysql)
- `MYSQL_DATABASE` (default: pdbm_bdd)
- `MYSQL_PORT` (default: 3306)

### Application Configuration

- `LOG_LEVEL`: Logging level (default: INFO)
- `CDN_BASE_URL`: Base URL for image CDN (default: https://cellar-c2.services.clever-cloud.com/info-medicaments/exports/images)

## Scalingo Deployment

This project is a [web-less application](https://doc.scalingo.com/platform/app/web-less-app) designed to run as scheduled tasks on Scalingo.

### Initial Setup

After the first deployment, scale the web process to 0:

```bash
scalingo --app your-app scale web:0
```

### Running Tasks

Run parsing tasks as one-off containers (pass the full command):

```bash
# Parse Notice files (N*.htm)
scalingo --app your-app run --size 2XL "python -m infomed_html_parser.cli s3 --pattern N --batch-size 1000"

# Parse RCP files (R*.htm)
scalingo --app your-app run --size 2XL "python -m infomed_html_parser.cli s3 --pattern R --batch-size 1000"

# Test with a limit
scalingo --app your-app run "python -m infomed_html_parser.cli s3 --pattern N --limite 10"
```


For automated execution, we will use [Scalingo Scheduler](https://doc.scalingo.com/platform/app/task-scheduling/scalingo-scheduler) with a `cron.json` file.

### Required Environment Variables

Set these in your Scalingo app settings:

- `S3_KEY_ID` and `S3_KEY_SECRET` (from Clever Cloud Cellar addon)
- `DATABASE_URL`: Copy the MySQL connection string from the app containing the database addon

## SQL to CSV Conversion

Convert SQL INSERT statements (T-SQL, MySQL, PostgreSQL) to CSV files.

```bash
poetry run infomed-html-parser sql-to-csv <sql_file> [options]
```

Options:
- `--output, -o`: Output CSV file (default: same name with .csv extension)
- `--encoding, -e`: Source file encoding (default: iso-8859-1)
- `--dialect, -d`: SQL dialect - tsql, mysql, postgres (default: tsql)

Example with Codex Triam ATC files:
```bash
# Convert ClasseATC
poetry run infomed-html-parser sql-to-csv ClasseATC_data.sql -o classe_atc.csv

# Convert VUClassesATC (CIS <-> ATC links)
poetry run infomed-html-parser sql-to-csv VUClassesATC_data.sql -o cis_atc.csv
```

### Importing ATC data into PostgreSQL

After generating the CSV files, use the provided SQL script to load them:

```bash
# Run the migrations in infomedicament first
cd ../infomedicament && npm run db:migrate:latest

# Then import the data (paths are configurable via environment variables)
export ATC_CSV_PATH=/path/to/classe_atc.csv
export CIS_ATC_CSV_PATH=/path/to/cis_atc.csv
psql -v atc_csv="$ATC_CSV_PATH" -v cis_atc_csv="$CIS_ATC_CSV_PATH" $APP_DB_URL -f sql/import_atc.sql
```

## Pediatric Classification

Classify medications for pediatric use based on their parsed RCP content (sections 4.1, 4.2, 4.3). Produces three independent boolean labels:

- **A**: Indication pédiatrique (pediatric indication exists)
- **B**: Contre-indication pédiatrique (pediatric contraindication exists)
- **C**: Sur avis d'un professionnel de santé (requires professional advice)

```bash
poetry run infomed-html-parser classify-pediatric --rcp <jsonl_file> [options]
```

Options:
- `--rcp`: Parsed RCP JSONL file (required, produced by the `s3` or `local` commands with `--pattern R`)
- `--truth`: Ground truth CSV for evaluation (columns: `cis,code_atc,A:...,B:...,C:...` with `oui/non` values)
- `--output, -o`: Output predictions CSV (default: `data/predictions.csv`)

Example:
```bash
# Produce parsed RCPs first
poetry run infomed-html-parser s3 --cis-file data/test_set_cis.csv --pattern R -o data/rcp_pediatrie.jsonl

# Classify and evaluate against ground truth
poetry run infomed-html-parser classify-pediatric \
  --rcp data/rcp_pediatrie.jsonl \
  --truth data/ground_truth.csv \
  -o data/predictions.csv
```

The predictions CSV includes explainability columns (matched keywords, evidence text, C-reasons) for manual review.

## Development

```bash
# Install with dev dependencies
poetry install --with dev

# Run tests
poetry run pytest

# Run tests with coverage
poetry run pytest --cov=infomed_html_parser

# Lint and format
poetry run ruff check .
poetry run ruff format .

# Auto-fix linting issues
poetry run ruff check . --fix
```
