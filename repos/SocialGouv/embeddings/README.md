# Chroma Embeddings

## Installation

### With docker

```shell
docker compose --build -d
```

### Manual

Create a `./.env` file containing the following variables
```bash
DATA_DIRECTORY=./my_md_files # folder storing files md to index
CHROMA_PERSIST_DIRECTORY=./.database # folder storing indexes
```

Setup python virtual environment
```shell
python -m venv <my_env_name>
source <my_env_name>/bin/activate
```

Install dependencies
```shell
pip install -r requirements.txt
```

Run the app
```shell
python app.py
```

## API

| Method | Route                        | Description                         |
|--------|------------------------------|-------------------------------------|
| GET    | /healthz                     | Healthz check                       |
| GET    | /api/collections             | List all collections in database    |
| GET    | /api/collection/:name?query= | Run `query` over `:name` collection |
| GET    | /api/collection/:name/info   | Get info about `:name` collection   |
| GET    | /api/collection/:name/index  | Create indexes from `DATA_DIRECTORY` and add indexes to `:name` collection |
