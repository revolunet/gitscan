# matomo-to-pg ![](https://img.shields.io/badge/Docker-ghcr.io-blue?logo=docker) ![GitHub Release](https://img.shields.io/github/v/release/betagouv/matomo-to-pg) 

![](./logo.png)

Sync some matomo tables from MySQL to PostgreSQL.

For example to create custom metabase dashboards:

![](./shot.png)

The tables currently synced are:

- `matomo_log_conversion`
- `matomo_log_visit`
- `matomo_log_link_visit_action`
- `matomo_log_action`

## Usage

Adjust your `.env` from the `.env.example` then run :

```bash
docker run --env-file .env ghcr.io/betagouv/matomo-to-pg/sync
```

You first need to create your PostgreSQL database structure:

Example with docker:

```
docker cp ./pg-init.sql [id]:/tmp/pg-init.sql
docker exec -ti [id] psql --dbname matomo -U matomo -f /tmp/pg-init.sql
```

## Dev

Run from source with `node --env-file=.env src/index.mjs`

To update the source or target database typings, run `yarn kysely-codegen --print` with the `DATABASE_URL` of your choice.

## references

- https://developer.matomo.org/guides/database-schema#log-data-persistence-visits
- http://www.sqlines.com/online
- https://matomo.org/faq/how-to/how-do-i-write-sql-queries-to-select-visitors-list-of-pageviews-searches-events-in-the-matomo-database/#sql-query-to-select-all-visits-and-actions-for-a-specific-website-id

## related

- https://github.com/SocialGouv/matomo-postgres
