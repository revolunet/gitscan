# Journal de MesQuestionsCyber

Ce dépôt Git représente le journal des événements métiers 
survenus dans [MesQuestionsCyber](https://github.com/betagouv/anssi-recommandations-cyber).

Ces événements métiers ont vocation à être utilisés par la 
partie _reporting_ de MesQuestionsCyber.

C'est [Metabase](https://www.metabase.com/), qui a été choisi 
comme outil de _reporting_.

## Philosophie

Les événements métiers MesQuestionsCyber sont stockés dans une table `journal_mss.evenements`.  
Cette table est utilisée comme source de données de Metabase. 

Autrement dit : 
 1. Une action métier a lieu sur MesQuestionsCyber…
 2. …donnant lieu à l'émission d'un événement…
 3. …qui est consigné dans `journal_mqc.evenements`…
 4. …rendant ainsi accessible l'information via Metabase.

## Configuration de l'environnement de développement

Il est nécessaire en prérequis d'avoir installé [Git](https://git-scm.com/),
[Docker Engine](https://docs.docker.com/get-docker/) et [Docker Compose](https://docs.docker.com/compose/install/).

Commencer par récupérer les sources du projet et aller dans le répertoire créé.

```sh
$ git clone https://github.com/betagouv/anssi-mes-questions-cyber-journal.git && cd anssi-mes-questions-cyber-journal
```

Créer la base de données `mqc-journal` et un utilisateur `metabase` 
qui sera utilisé par Metabase.

```sh
$ docker compose up mqc-journal-db
$ docker compose exec mqc-journal-db createdb -U postgres mqc-journal
$ docker compose exec mqc-journal-db createuser -U postgres metabase
```

Vérifier la présence du `network` Docker `mqc-network`.

```sh
$ docker network ls | grep mqc-network
```

Cette commande devrait montrer le réseau `mqc-network`. Si ce n'est pas le cas, se référer au `README` de
[MesQuestionsCyber](https://github.com/betagouv/mon-service-securise) pour la création de celui-ci.

Créer un fichier `.env` en copiant fichier `.env.template` puis valoriser chaque variable du `.env`.

Mettre à niveau le schéma de la base de données, via [`knex.js`](https://knexjs.org/) qui s'exécute dans le conteneur `node`.

```sh
$ docker compose up node
```

Donner les droits en lecture sur les éléments créés à l'utilisateur `metabase`.

```sh
$ docker compose exec mqc-journal-db psql -U postgres -d mqc-journal -c 'GRANT USAGE ON SCHEMA journal_mqc TO metabase;'
$ docker compose exec mqc-journal-db psql -U postgres -d mqc-journal -c 'GRANT SELECT ON ALL TABLES IN SCHEMA journal_mqc TO metabase;'
```


Démarrer Metabase.

```sh
$ ./scripts/start.sh
```

Accéder à Metabase en visitant http://localhost:3000/setup.  

Paramétrer Metabase en suivant les instructions à l'écran :
 - Base de données : PostgreSQL
 - Host : `mqc-journal-db` (qui apparaît dans [./docker-compose.yml](./docker-compose.yml))
 - Port : `5432` (qui apparaît dans [./docker-compose.yml](./docker-compose.yml))
 - Database name : `mqc-journal`
 - Username : `metabase`
 - Password : laisser vide
 - Schemas : `Only these…` > `journal_mqc` (Attention ! C'est un `_`  et non un `-`)

Vous êtes à présent prêt à [poser des questions Metabase](https://www.metabase.com/docs/latest/questions/start) sur les 
données de MesQuestionsCyber.
