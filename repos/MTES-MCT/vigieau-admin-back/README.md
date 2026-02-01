# VigiEau Admin - Backend

## Description

## Installation

### Pré-requis

Vous aurez besoin de [NodeJS](https://nodejs.org/) v18+ et [Yarn](https://yarnpkg.com/) pour lancer ce projet.

Nous vous recommandons de regarder la [documentation de NestJS](https://nestjs.com/).

### Variables d'environnement

```bash
cp env.example .env
```

- NODE_ENV : local / dev / prod
- PORT : Port sur lequel tournera le serveur
- OAUTH2_CLIENT : Se référer à la documentation de [ProConnect](https://www.proconnect.gouv.fr/)
- SESSION_SECRET : Token JWT
- DATABASE : Informations pour se connecter à la DB (Postgres)
- WEBSITE_URL : Site web du frontend (http://localhost:3000 en local)
- DOMAIN : Domaine sur lequel tourne le serveur (localhost en local)
- API_DATAGOUV : Informations pour se connecter à Datagouv et pouvoir upload automatiquement les données de VigiEau
- ADMINJS : User / password pour accéder au backend AdminJS
- S3 : Informations pour se connecter aux buckets S3
- MAIL : Informations pour se connecter à la boite mail
- MAIL_MTE : Mail générique à renseigner pour l'envoi de mail systématique à une adresse
- DOMAIN_NAME : Domaine du frontend (localhost:3000 en local)
- PATH_TO_WRITE_FILE : Dossier pour stocker les fichiers temporaires ou le serveur peut lire / écrire

### Installation des dépendances

```bash
yarn install
```

### Lancer nuxt en mode développement

Démarre le serveur sur http://localhost:3001

```bash
yarn start:dev
```

### Générer le code de production

Génère le code de production de l’application:

```bash
yarn build
```

## Contribution

Les Pull Requests sont les bienvenues. Pour des changements majeurs merci d'ouvrir auparavant une issue pour en discuter.

Assurez-vous de mettre à jour les tests en conséquence.

## License

[MIT](https://choosealicense.com/licenses/mit/)
