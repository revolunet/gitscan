# Journal de Mon Portail NIS 2

Ce dépôt Git représente le journal des événements métiers 
survenus dans [Mon Portail NIS 2](https://github.com/betagouv/anssi-nis2).

Ces événements métiers ont vocation à être utilisés par la 
partie _reporting_ de Mon Portail NIS 2.

C'est [Metabase](https://www.metabase.com/), hébergé chez Scalingo, qui a été choisi 
comme outil de _reporting_.

## Configuration de l'environnement de développement

### Prérequis

Il est nécessaire en prérequis d'avoir installé [Git](https://git-scm.com/),
[Docker Engine](https://docs.docker.com/get-docker/) et [Docker Compose](https://docs.docker.com/compose/install/).

### Récupération du dépot 

Commencer par récupérer les sources du projet et aller dans le répertoire créé.

```sh
git clone https://github.com/betagouv/anssi-nis2-journal.git && cd anssi-nis2-journal
```

### Lancement et création de la base de données

Créer la base de données `nis2-journal` et un utilisateur `metabase` 
qui sera utilisé par Metabase.

```sh
docker compose up nis2-journal-db
docker compose exec nis2-journal-db createdb -U postgres nis2-journal
docker compose exec nis2-journal-db createuser -U postgres metabase
```

Lancer la migration:

```sh
docker compose up node
```

### Configuration de l'environnement

Créer un fichier `.env` en vous basant sur `.env.template` afin de créer les variables d'environnement nécessaires

### Lancement de metabase 

Lancer metabase:

```sh
docker compose up metabase
```

#### Configuration au premier lancement

Aller sur [http://localhost:3000/]()

![Formulaire de configuration du premier lancement](docs/images/accueil-premier-lancement.png "Formulaire de configuration du premier lancement")

![Choix du moteur de Base de données](docs/images/accueil-choix-moteur-bdd.png "Choix du moteur de Base de données")

![Informations de connexion à la base de données](docs/images/accueil-remplissage-infos-bdd.png "Informations de connexion à la base de données")

## Utilisations

### Migrations

#### Prérequis

Il est nécessaire d'avoir une version de [NodeJS](https://nodejs.org/) et de  [NPM](https://www.npmjs.com/) (ou équivalent). Se référer au fichier `package.json` pour plus d'information sur les versions nécessaires

Les migrations de données utilisent [type-orm](https://typeorm.io/) et sont écrites en `TypeScript`. Pour démarrer, installer les dépendances nécessaires :

```shell
npm ci
```

#### Fichiers utiles

- `.env` (_ignoré par Git_) permet de configurer les variables d'environnement, en particulier la chaine de connexion à la base de donnés. Les informations utiles concernant les variables de ce fichier peuvent être trouvées dans [`.env.template`](.env.template)
- [`data-source.ts`](data-source.ts) définie l'organisation de la source de données pour leur utilisation par type-orm
- [`migrations/`](migrations/) contient l'ensemble des migrations, une étape par fichier

#### Effectuer une migration

Il existe deux manières d'exécuter des migrations :

1. Via docker
```sh
docker compose up node
```
2. Directement dans l'environnement courant
```shell
npm run typeorm migration:run -- -d data-source.ts
```

## Développement

### Migrations de données

#### Création d'une nouvelle migration

Les migrations de données sont décrites [dans la documentation TypeORM](https://typeorm.io/migrations)

Créer une nouvelle migration :

```shell
npm run typeorm migration:create .\migrations\<TitreDeLaMigration>
```

Il est ensuite possible d'utiliser soit du SQL avec `queryRunner.query`, soit l'[API TypeORM](https://typeorm.io/migrations#using-migration-api-to-write-migrations) dédiée

#### Lancement d'une migration

Il est possible de se référer au chapitre [Effectuer une migration](#effectuer-une-migration)

