# Verseau2

Application de dépôts de fichiers d'autosurveillance

## 📋 Table des matières

- [Description](#description)
- [Architecture](#architecture)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Scripts disponibles](#scripts-disponibles)
- [Technologies](#technologies)
- [Structure du projet](#structure-du-projet)
- [Développement](#développement)
- [Tests](#tests)

## Description

Verseau2 est une application full-stack permettant le dépôt de fichiers d'autosurveillance. Elle utilise une architecture monorepo avec un backend NestJS et un frontend React.

### Fonctionnalités principales

- 📁 Dépôt de fichiers d'autosurveillance
- ☁️ Stockage sur S3 (Outscale ou mock local)
- ⚡ Traitement asynchrone des fichiers d'autosurveillance
- 🔄 Architecture séparée serveur/worker
- ✅ Contrôles SANDRE et format V1
- 🔐 Authentification OIDC
- 📊 Référentiels Roseau et Lanceleau
- 📧 Système de notifications par email
- 📤 Export SFTP

## Architecture

Le projet est organisé en monorepo avec les composants suivants :

- **Backend (apps/back)** : API NestJS
  - Serveur HTTP pour l'API REST
  - Worker pour le traitement asynchrone des fichiers
  - Modules principaux :
    - `dossier` : Gestion des dépôts et contrôles
    - `referentiel` : Référentiels Roseau et Lanceleau
    - `user` : Gestion des utilisateurs
    - `authentication` : Authentification OIDC
    - `notification` : Système de notifications (email)
    - `infra` : Infrastructure (DB, S3, Queue, SFTP)
  
- **Frontend (apps/front)** : Application React avec Vite
  - Interface utilisateur basée sur le Design System de l'État (DSFR)
  - Communication avec l'API backend

- **Packages partagés**
  - `@lib/dossier` : Types et DTOs partagés
  - `@lib/parser` : Parser XML pour fichiers SANDRE

## Prérequis

- Node.js (version 22+)
- npm
- Docker et Docker Compose (pour l'environnement local)
- PostgreSQL (via Docker)
- Stockage S3 compatible (AWS S3, Outscale, ou mock local)

## Installation

1. Cloner le repository :

```bash
git clone <url-du-repo>
cd verseau2
```

2. Installer les dépendances :

```bash
npm install
```

Cela installera automatiquement les dépendances pour tous les workspaces (backend et frontend).

## Configuration

### Backend

Créer un fichier `.env` dans `apps/back/` basé sur `example.env` :

```env
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/verseau2

# S3 Configuration
S3_PROVIDER=mock # ou outscale
S3_BUCKET=MY_BUCKET
S3_ENDPOINT=OUTSCALE_ENDPOINT
S3_REGION=OUTSCALE_REGION
S3_ACCESS_KEY=MY_ACCESS_KEY
S3_SECRET_KEY=MY_SECRET_KEY

# SANDRE Mock Configuration (pour les tests)
USE_SANDRE_MOCK=false

# Logs
LOGS_LEVEL=debug # ou verbose

# Email
EMAIL_PROVIDER=mock # ou brevo ou mailcatcher

# OpenID Connect
OIDC_ISSUER_URL=https://your-oidc-provider/.well-known/openid-configuration
OIDC_CLIENT_ID=your-client-id
OIDC_MOCK=false
OIDC_FAKE_TOKEN=change-me

# SFTP Configuration
SFTP_PROVIDER=mock # ou real
SFTP_HOST=localhost
SFTP_PORT=22
SFTP_USERNAME=user
SFTP_PRIVATE_KEY=key
```

### Frontend

Créer un fichier `.env` dans `apps/front/` basé sur `src/example.env` :

```env
VITE_API_BASE_URL=http://localhost:3000
```


### Infrastructure locale

Démarrer les services avec Docker Compose :

```bash
cd devops/local
docker-compose up -d
```

Cela démarre :
- PostgreSQL (base de données)
- S3Mock (Adobe S3Mock pour stockage S3)
- App (application complète - optionnel)
- sync-pg (outil de synchronisation de base de données - optionnel)

## Utilisation

### Développement

Démarrer l'ensemble de l'application (backend + frontend) :

```bash
npm run dev
```

Ou démarrer les services individuellement :

```bash
# Backend uniquement
npm run dev:back

# Frontend uniquement
npm run dev:front
```

### Production

1. Builder l'ensemble du projet :

```bash
npm run build
```

2. Démarrer le backend en production (serveur + worker) :

```bash
npm run start
```

Le frontend compilé est servi automatiquement par le backend via le module `FrontendStaticModule`.

## Scripts disponibles

### Root

- `npm run dev` : Démarre backend et frontend en mode développement
- `npm run dev:back` : Démarre uniquement le backend
- `npm run dev:front` : Démarre uniquement le frontend
- `npm run build` : Compile frontend et backend
- `npm run start` : Démarre le backend en production
- `npm run test` : Lance les tests du backend et du parser
- `npm run clean` : Nettoie tous les workspaces

### Backend (apps/back)

- `npm run dev` : Démarre serveur et worker en mode watch
- `npm run start:server:dev` : Démarre uniquement le serveur HTTP
- `npm run start:worker:dev` : Démarre uniquement le worker
- `npm run build` : Compile le projet
- `npm run start` : Démarre en production (serveur + worker)
- `npm run test` : Lance tous les tests (unitaires + e2e)
- `npm run test:cov` : Lance les tests avec coverage
- `npm run test:watch` : Lance les tests en mode watch
- `npm run test:e2e` : Lance uniquement les tests end-to-end
- `npm run lint` : Lint et corrige le code
- `npm run clean` : Nettoie les dossiers dist et node_modules

### Frontend (apps/front)

- `npm run dev` : Démarre le serveur de développement Vite
- `npm run build` : Compile pour la production
- `npm run preview` : Prévisualise le build de production
- `npm run lint` : Lint le code
- `npm run format` : Formate le code avec Prettier
- `npm run clean` : Nettoie les dossiers dist et node_modules

### Packages

- `npm run clean` : Nettoie tous les packages
- `npm run test` : Lance les tests du backend et du parser

## Technologies

### Backend

- **NestJS 11** : Framework Node.js
- **TypeORM** : ORM pour PostgreSQL
- **pg-boss** : File d'attente basée sur PostgreSQL
- **AWS SDK v3** : Client S3 pour le stockage de fichiers
- **TypeScript** : Langage de programmation
- **Jest** : Framework de tests
- **Testcontainers** : Tests d'intégration avec PostgreSQL
- **OpenID Client** : Authentification OIDC
- **ssh2-sftp-client** : Client SFTP

### Frontend

- **React 19** : Bibliothèque UI
- **Vite** : Build tool et dev server
- **TypeScript** : Langage de programmation
- **@codegouvfr/react-dsfr** : Design System de l'État Français
- **React Router 7** : Routage
- **TanStack Query** : Gestion des requêtes API

### Infrastructure

- **PostgreSQL** : Base de données
- **Docker** : Conteneurisation
- **Adobe S3Mock** : Stockage S3 compatible (local)
- **Outscale** : Fournisseur S3 (production)

## Structure du projet

```
verseau2/
├── apps/
│   ├── back/              # Application backend NestJS
│   │   ├── src/
│   │   │   ├── api/           # Module API principal
│   │   │   ├── dossier/       # Gestion des dépôts et contrôles
│   │   │   │   ├── depot/     # Dépôts de fichiers
│   │   │   │   └── controle/  # Contrôles SANDRE et V1
│   │   │   ├── referentiel/   # Référentiels (Roseau, Lanceleau)
│   │   │   ├── user/          # Gestion des utilisateurs
│   │   │   ├── authentication/# Authentification OIDC
│   │   │   ├── notification/  # Système de notifications
│   │   │   ├── infra/         # Infrastructure (DB, S3, Queue, SFTP)
│   │   │   ├── shared/        # Code partagé
│   │   │   ├── worker/        # Workers asynchrones
│   │   │   ├── mainServer.ts  # Point d'entrée serveur HTTP
│   │   │   └── mainWorker.ts  # Point d'entrée worker
│   │   └── test/          # Tests e2e
│   └── front/             # Application frontend React
│       └── src/
│           ├── components/    # Composants réutilisables
│           ├── pages/         # Pages de l'application
│           └── api/           # Client API
├── packages/              # Packages partagés
│   ├── dossier/           # Types et DTOs partagés
│   └── parser/            # Parser XML SANDRE
├── devops/
│   ├── local/             # Configuration Docker locale
│   │   └── docker-compose.yml
│   └── tools/             # Outils DevOps
│       └── sync-pg/       # Synchronisation base de données
└── package.json           # Configuration monorepo
```

## Développement

### Architecture hexagonale

Le backend suit une architecture hexagonale avec :

- **Entities** : Entités métier
- **Use Cases** : Logique métier
- **Repositories** : Abstraction de persistance
- **Controllers** : Points d'entrée HTTP
- **Services** : Orchestration

### Conventions de code

- Utilisation de TypeScript strict
- ESLint pour la qualité du code (ESLint 9 avec flat config)
- Prettier pour le formatage
- Git hooks avec Husky pour validation pre-commit

### Conventions de nommage

#### Backend

- **Fichiers** : 
  - `camelCase` pour les fichiers TypeScript : `depot.service.ts`, `depot.controller.ts`
  - Suffixes selon le type : `.entity.ts`, `.service.ts`, `.controller.ts`, `.repository.ts`, `.gateway.ts`, `.module.ts`, `.dto.ts`, `.guard.ts`, `.decorator.ts`
  
- **Classes et Interfaces** :
  - `PascalCase` pour les classes : `DepotEntity`, `DepotService`, `DepotController`
  - `PascalCase` pour les interfaces/gateways : `DepotGateway`, `RoseauGateway`
  - Suffixes explicites : `Entity`, `Service`, `Controller`, `Repository`, `Gateway`, `Module`, `Guard`, `Decorator`

- **Use Cases** :
  - `PascalCase` avec nom descriptif : `DeposerUnFichier`
  - Fichier en `camelCase` : `deposerUnFichier.ts`

- **Variables et fonctions** :
  - `camelCase` : `depotService`, `findUserById()`, `createDepot()`

- **Constantes et enums** :
  - `PascalCase` pour les enums : `SandreTags`, `DepotStatus`
  - `UPPER_SNAKE_CASE` pour les variables d'environnement : `DATABASE_URL`, `S3_PROVIDER`

#### Frontend

- **Fichiers** :
  - `PascalCase` pour les composants React : `Dashboard.tsx`, `DepotUpload.tsx`
  - `camelCase` pour les utilitaires : `controleMapper.ts`, `useDepotRecap.ts`

- **Composants** :
  - `PascalCase` : `Dashboard`, `FileDropZone`, `StatCard`

- **Hooks personnalisés** :
  - Préfixe `use` + `PascalCase` : `usePagination`, `useDepotRecap`

- **Dossiers** :
  - `kebab-case` pour les dossiers de fonctionnalités : `depot-upload-recap/`
  - `camelCase` ou lowercase pour les dossiers techniques : `components/`, `pages/`, `api/`

### Environnements de mock

Le projet supporte plusieurs environnements de mock pour faciliter le développement :

- **SANDRE Mock** : `USE_SANDRE_MOCK=true` - Mock le service de validation SANDRE
- **S3 Mock** : `S3_PROVIDER=mock` - Utilise Adobe S3Mock pour le stockage
- **Email Mock** : `EMAIL_PROVIDER=mock` - Mock l'envoi d'emails
- **SFTP Mock** : `SFTP_PROVIDER=mock` - Mock le serveur SFTP
- **OIDC Mock** : `OIDC_MOCK=true` - Mock l'authentification OIDC

### Ajout de fonctionnalités

1. Créer une branche feature : `git checkout -b feature/nom-feature`
2. Développer et tester
3. Commiter avec des messages clairs
4. Créer une pull request

## Tests

### Backend

```bash
cd apps/back

# Tests unitaires
npm run test

# Tests avec coverage
npm run test:cov

# Tests e2e
npm run test:e2e

# Tests en mode watch
npm run test:watch
```

