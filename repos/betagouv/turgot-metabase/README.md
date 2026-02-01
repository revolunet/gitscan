# turgot-metabase

Le but de ce repo est de proposer un script qui va copier la DB de prod dans une réplique qui sera lue par Metabase.
L'idée est donc de déployer ce script sur l'app `turgot-metabase-data`.

### Pour lancer le script manuellement

```sh
scalingo --app turgot-metabase-data --region osc-secnum-fr1 run bash ./sync_tables.sh
```
