# json-schemas

Some JSON-schemas for linting and validation


## Postgres

Description               | Url
--------------------------|----------------------------
PostgreSQL extensions     | [![JSON schema](https://img.shields.io/badge/JSON-schema-8A2BE2)](https://raw.githubusercontent.com/SocialGouv/json-schemas/main/postgres/extensions.json)
PostgreSQL parameters     | [![JSON schema](https://img.shields.io/badge/JSON-schema-8A2BE2)](https://raw.githubusercontent.com/SocialGouv/json-schemas/main/postgres/parameters.json)
Nginx ingress annotations | [![JSON schema](https://img.shields.io/badge/JSON-schema-8A2BE2)](https://raw.githubusercontent.com/SocialGouv/json-schemas/main/nginx/annotations.schema.json)

Notes:
- All params are strings for [CNPG](https://cloudnative-pg.io) compatibility
- Request to generate parameters are run on PG14
- With these extentions loaded:

```
address_standardizer
address_standardizer_data_us
address_standardizer_data_us-3
address_standardizer-3
adminpack
amcheck
autoinc
bloom
btree_gin
btree_gist
citext
cube
dblink
dict_int
dict_xsyn
earthdistance
file_fdw
fuzzystrmatch
hstore
insert_username
intagg
intarray
isn
lo
ltree
moddatetime
old_snapshot
pageinspect
pg_buffercache
pg_freespacemap
pg_prewarm
pg_stat_statements
pg_surgery
pg_trgm
pg_visibility
pgaudit
pgcrypto
pgrouting
pgrowlocks
pgstattuple
plpgsql
postgis
postgis_raster
postgis_raster-3
postgis_sfcgal
postgis_sfcgal-3
postgis_tiger_geocoder
postgis_tiger_geocoder-3
postgis_topology
postgis_topology-3
postgis-3
postgres_fdw
refint
seg
sslinfo
tablefunc
tcn
tsm_system_rows
tsm_system_time
unaccent
uuid-ossp
xml2
```
