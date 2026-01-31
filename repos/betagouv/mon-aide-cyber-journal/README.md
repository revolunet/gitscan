# MonAideCyber Journal

# Journal de MonAideCyber

Ce dépôt Git représente le journal des événements métiers
survenus dans [MonAideCyber](https://github.com/betagouv/mon-aide-cyber).

Ces événements métiers ont vocation à être utilisés par la
partie _reporting_ de MonAideCyber.

C'est [Metabase](https://www.metabase.com/), hébergé chez Scalingo, qui a été choisi
comme outil de _reporting_.

## Configuration de l'environnement de développement

Il est nécessaire en prérequis d'avoir installé [Git](https://git-scm.com/),
[Docker Engine](https://docs.docker.com/get-docker/) et [Docker Compose](https://docs.docker.com/compose/install/).

Commencer par récupérer les sources du projet et aller dans le répertoire créé.

```sh
$ git clone git@github.com:betagouv/mon-aide-cyber-journal.git && cd mon-service-aide-journal
```
Rajouter le réseau commun à l'application et au journal (s'il n'existe pas déjà) :

```sh
$ docker network create reseau-mon-aide-cyber
```

Créer la base de données `mac-journal` et un utilisateur `metabase`
qui sera utilisé par Metabase.

```sh
$ docker compose up mac-journal-db
$ docker compose exec mac-journal-db createdb -U postgres mac-journal
$ docker compose exec mac-journal-db createuser -U postgres metabase
```

Créer un fichier `.env` en copiant fichier `.env.template` puis valoriser chaque variable du `.env`.

Mettre à niveau le schéma de la base de données, via [`knex.js`](https://knexjs.org/) qui s'exécute dans le conteneur `node`.

```sh
$ docker compose up node
```

Donner les droits en lecture sur les éléments créés à l'utilisateur `metabase`.

```sh
$ docker compose exec mac-journal-db psql -U postgres -d mac-journal -c 'GRANT USAGE ON SCHEMA journal_mac TO metabase;'
$ docker compose exec mac-journal-db psql -U postgres -d mac-journal -c 'GRANT SELECT ON ALL TABLES IN SCHEMA journal_mac TO metabase;'
```