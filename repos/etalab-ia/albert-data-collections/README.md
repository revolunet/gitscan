# Albert Data Collections

Useful functionalities and pipelines related to ALBERT's data collections.

## Installation

Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate
```

Install dependencies:
```bash
pip install -r pyproject.toml
```

## Configuration

Create a `.env` file in the project root with the required environment variables. You can use the example file as a template:

```bash
cp .env.example .env
```

Then edit the `.env` file with your actual values.

## Usage

Update collections dictionary 
Basic method:
```bash
python main.py update_collections_dict
```

Complete method:
```bash
source daily_update.sh
```

Automatic method (cron):
```bash
sudo -u USERNAME crontab cron_config.txt
```