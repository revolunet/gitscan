# Assigner des thèmes aux accords d'entreprise

## Environment

You might want to set the following env variables:

```bash
# POTGRES DB - Storage of embeddings, chunks, themes
export POSTGRES_USER="user"
export POSTGRES_PASSWORD="123456"
export POSTGRES_DB="company_agreements"

# SCALEWAY - if you are running embedding models on it
export SCALEWAY_API_KEY="<API_KEY>"
export SCALEWAY_BASE_URL="<URL>/v1"
export SCALEWAY_MODEL_NAME="baai/bge-multilingual-gemma2:fp32"

# OPENAI - if you are using its embedding models
export OPENAI_API_KEY="<API_KEY>"
export OPENAI_MODEL_NAME="text-embedding-3-large"
```

## Docker PostgreSQL

```bash
docker-compose up -d
docker exec -it postgres-pgvector psql -U $POSTGRES_USER -d $POSTGRES_DB -c "\d"
```

## Alembic

### Init Alembic

```bash
# To update DB schemas
alembic revision --autogenerate -m "Initial migration"
# Open up the generated revision and fix imports that might be wrong (because of pgvector for example)

# To apply DB schemas
alembic upgrade head
```

### Reset the DB and alembic entirely

```bash
# Delete all alembic versions
rm -rf tca/alembic/versions/*.py

# Drop the database
docker exec -it postgres-pgvector psql -U $POSTGRES_USER -d postgres -c "DROP DATABASE $POSTGRES_DB;"

# Create the database again
docker exec -it postgres-pgvector psql -U $POSTGRES_USER -d postgres -c "CREATE DATABASE $POSTGRES_DB;"

# Run `scripts/init.sql` against the PostgreSQL DB in the Docker container:
docker exec -i postgres-pgvector psql -U $POSTGRES_USER -d $POSTGRES_DB -f docker-entrypoint-initdb.d/init.sql
```

Then re-run [Init Alembic](#init-alembic)

## Embeddings

### Using Ollama locally

```bash
ollama pull bge-m3:567m-fp16
```

## Scripts

### Ingest documents

```bash
make ingest-docs
```

### Ingest themes

```bash
make ingest-themes
```

### Theming

```bash
make run-theming
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
