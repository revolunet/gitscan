## Fonds Vert - Espace lauréat

### Introduction

Ce projet repose sur 4 services externes :

- [ProConnect](https://github.com/numerique-gouv/proconnect-documentation/tree/main/doc_fs) : identité des utilisateurs et authentification
- [Demarches Simplifiée](https://doc.demarches-simplifiees.fr/api-graphql) : dossiers de subvention et d'évaluation
- [API Fonds Vert](https://api-fonds-vert.datahub.din.developpement-durable.gouv.fr/docs) : données financières et consolidation des indicateurs
- [Grist](https://grist.numerique.gouv.fr/) : mapping entre les champs des différentes APIs

Toutes les données sont hébergées sur ces services, aucune base de données n'est donc nécessaire.

### Installation

```bash
npm i
```

Copiez le fichier `.env.example` en `.env` et complétez les variables d'environnement.


### Développement

Lancez le serveur de développement :

```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

### Tests

En activant le mode `testProxy` de Next, les appels API côté serveur peuvent être interceptés par MSW.
Lancez le serveur de développement en activant ce proxy :

```bash
npm run dev:test
```

Cette commande est optionnelle. Elle permettra notamment d'exécuter plus rapidement les tests par la suite.

Lancez les tests avec Playwright :

```bash
npm run test
```

Playwright réutilisera un serveur éventuellement déjà disponible sur le port 4000, sinon il lancera `npm run dev:test` avant.

Lancez un test spécifique :

```bash
npm run test -- tests/dossier.spec.ts
```

### Guide

#### Mode par défaut

L'espace lauréat est accessible via :

- [/espace-laureat](http://localhost:3000/espace-laureat)

L'utilisateur se connecte via ProConnect. Nous récupérons tous les dossiers associés à son numéro de SIRET via l'API
Fonds Vert. Nous n'affichons que les dossiers rattachés à l'adresse email de l'utilisateur connecté. Seuls les
utilisateurs connectés avec une adresse email vérifiée par ProConnect peuvent accéder à l'espace lauréat.

Il est possible d'accéder directement à un dossier :

- [/espace-laureat/1234567](http://localhost:3000/espace-laureat/1234567)

Cette URL d'accès direct peut être utilisée, par exemple, dans les communications par email. Elle est également utile
pour les administrateurs de la plateforme.

#### Mode administrateur

Si votre compte a un rôle administrateur, vous pouvez visualiser les dossiers des lauréats. Vous pouvez également
accéder à tous les dossiers associés à un numéro de SIRET :

- [/espace-laureat?siret=1234567891011](http://localhost:3000/espace-laureat?siret=1234567891011)

#### Mode démo

Une page de démonstration, ne nécessitant ni token ni compte ProConnect, est disponible :

- [/espace-laureat/demo](http://localhost:3000/espace-laureat/demo)
