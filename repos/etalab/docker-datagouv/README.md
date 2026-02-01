# Data.gouv.fr in Docker/Docker Compose

A sample docker-compose stack for Datagouv

Start the stack with:

```bash
docker-compose up
```

Add fixture data by running:

```bash
docker-compose run --rm udata init
```

Then connect to <http://localhost:7000/>.
