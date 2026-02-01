# Aquapreneur

## Prerequis

- Node.js version 22
- npm version 10
- Une base de donnée PostgreSQL

## Installation

- copier le ficher `.env.example` vers un fichier `.env`.
- renseignez les valeurs des variables d’environnement.
- exécutez la commande `npm install`
- puis `npm run prepare`
- lancez le serveur de développement en exécutant `npm run dev`

## Tests

- copier le ficher `.env.test.example` vers un fichier `.env.test`.
- renseignez les valeurs des variables d’environnement **spécifiques aux tests**  
  La base de donnée renseignée sera remise à zéro à chaque lancement.
- lancez les tests en exécutant `npm run test`

## Préparation des données

Voir [data-tools/README.md](data-tools/README.md)

## Scripts utilitaires

Voir [scripts/README.md](scripts/README.md)

## Comptes utilisateurs

Les comptes utilisateurs sont créés automatiquement après une première connexion ProConnect, mais ils sont marqués comme
non valides. Il faut pour l’instant aller éditer manuellement l’entrée dans la BDD pour la valider, et éventuellement lui
donner des droits de superutilisateur.

Pour le serveur de développement, il faut utiliser un des comptes test Proconnect.
Voir : https://partenaires.proconnect.gouv.fr/docs/fournisseur-service/identifiants-fi-test

## Migrations de la BDD

Suite à une modification du schema de la base de donnée, il faut créer une migration :
`npm run db:make-migration <description_sans_espace>`
puis la faire tourner
`npm run db:migrate`.

Ne pas oublier de la faire tourner également sur la base de donnée de test
`npm run db:migrate-test`.

Après déploiement du code en production, il faut là aussi l’appliquer manuellement.

## Documentation utile

- [SvelteKit](https://svelte.dev/docs/kit/introduction) : la documentation du framework javascript
- [ProConnect](https://partenaires.proconnect.gouv.fr/docs/fournisseur-service) : le service d’authentification
- [Lucia](https://lucia-auth.com/) : l’inspiration pour l’implémentation OIDC
- [Drizzle](https://orm.drizzle.team) : la documentation de l’ORM
- [Playwright](https://playwright.dev/) : le framework de tests e2e
- [Vitest](https://vitest.dev/) : le framework des tests unitaires, et de l’API
- [Zod](https://zod.dev/) : pour le typage dynamique
- [Superforms](https://superforms.rocks/) : gestion des formulaires
- [L’API Sirene](https://portail-api.insee.fr/catalog/api/2ba0e549-5587-3ef1-9082-99cd865de66f/doc?page=6548510e-c3e1-3099-be96-6edf02870699) : utilisée pour préremplir les informations des entreprises

## Mise à jour du DSFR

- récupérer la [dernière version](https://github.com/GouvernementFR/dsfr/releases) du DSFR
- copier le contenu de son repertoire `dist` dans le repertoire `/static/<VERSION>`
- mettre à jour les URLs dans [/src/app.html](/src/app.html)
- mettre à jour la variable DSFR_VERSION dans [/src/lib/constants.ts](/src/lib/constants.ts)
