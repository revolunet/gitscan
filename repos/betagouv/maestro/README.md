# Maestro

## Développement

### Prérequis

- node
- npm
- serveur Postgres (sur macOS, possible d'utiliser [postgresapp](https://postgresapp.com>))
- service de stockage S3
- serveur mail
- browserless

### Docker

Avec la commande suivante, vous pouvez initialiser les différents composants de l'application.

```bash
docker compose up -d
```

### Base de données

Créer une base de données vide pour l'application (par exemple `maestro`).

La création des tables et autres structures SQL se fera automatiquement lors du lancement de l'application via les migrations [KnexJS](http://knexjs.org/#Migrations) contenues dans le répertoire `/server/database/migrations`

### Stockage S3

Pour le stockage des fichiers, l'application utilise un service S3.

### Emails

Accessible directement via http://localhost:1080

Ce service permet de recevoir les emails envoyés par Maestro.

### Browserless

Accessible directement via http://localhost:3002/docs

Ce service permet de générer les pdfs.

### Installation de l'application

```bash
git clone https://github.com/betagouv/maestro.git

cd maestro
npm ci
```

### Variables d'environnement

L'application utilise les variables d'environnement spécifiées dans le fichier `/server/utils/config.ts` pour le backend et dans le fichier `/frontend/src/utils/config.ts` pour le frontend.

En local, elles peuvent être définies dans des fichiers `.env` :

- un fichier dans le dossier `frontend` pour les variables d'environnement `VITE...` nécessaires au frontend (voir `frontend/.env.example` pour un exemple)
- un fichier à la racine du projet pour les autres variables d'environnement (voir `.env.example` pour un exemple)

### Chargement des données

Vous pouvez injecter un jeu de données grâce au répertoire `/server/database/seeds/dummy`.

```bash
npm run seed -w server
```

### Lancement de l'application en local

```bash
npm run start-local
```

L'application est accessible à l'adresse sur <http://localhost:3000>

### Lancement des tests

```bash
npm run test  #All tests
npm run test -w server #Backend tests
```

Pour reproduire les tests avec la même Seed que sur la CI :

```bash
TEST_SEED=1231212 npm run test -w server
```

### Commits

Semantic-release est utilisé pour générer les versions de Maestro.
Il faut donc mettre des messages respectant une certaine structure pour commiter.
<https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md>

## Démo

La version de démo de l'application est accessible à l'adresse <https://maestro.incubateur.net>

## Production

La version de production de l'application est accessible à l'adresse <https://app.maestro.beta.gouv.fr>
