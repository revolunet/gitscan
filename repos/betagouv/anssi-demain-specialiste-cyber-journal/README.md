# DemainSpécialisteCyber Journal

# Journal de DemainSpécialisteCyber

Ce dépôt Git représente le journal des événements métiers
survenus dans [DemainSpécialisteCyber](https://github.com/betagouv/anssi-demain-specialiste-cyber).

Ces événements métiers ont vocation à être utilisés par la
partie _reporting_ de DemainSpécialisteCyber.

C'est [Metabase](https://www.metabase.com/) qui a été choisi
comme outil de _reporting_.

## Configuration de l'environnement de développement

Il est nécessaire en prérequis d'avoir installé [Git](https://git-scm.com/),
[Docker Engine](https://docs.docker.com/get-docker/) et [Docker Compose](https://docs.docker.com/compose/install/).

Commencer par récupérer les sources du projet et aller dans le répertoire créé.

```sh
$ git@github.com:betagouv/anssi-demain-specialiste-cyber-journal.git && cd anssi-demain-specialiste-cyber-journal
```
Rajouter le réseau commun à l'application et au journal (s'il n'existe pas déjà) :

```sh
$ docker network create reseau-demain-specialiste-cyber
```

Créer la base de données `dsc-journal` et un utilisateur `metabase`
qui sera utilisé par Metabase.

```sh
$ docker compose up dsc-journal-db
```

Créer un fichier `.env` en copiant fichier `.env.template` puis valoriser chaque variable du `.env`.

Mettre à niveau le schéma de la base de données, via [`knex.js`](https://knexjs.org/) qui s'exécute dans le conteneur `node`.

```sh
$ docker compose up node
```

Donner les droits en lecture sur les éléments créés à l'utilisateur `metabase`.

```sh
$ docker compose exec dsc-journal-db psql -U postgres -d dsc-journal -c 'GRANT USAGE ON SCHEMA journal_dsc TO metabase;'
$ docker compose exec dsc-journal-db psql -U postgres -d dsc-journal -c 'GRANT SELECT ON ALL TABLES IN SCHEMA journal_dsc TO metabase;'
```