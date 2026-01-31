# Authentification

Site de présentation du produit Authentification. Authentification vise à connecter les agent·e·s publics de manière sécurisée. Le service ne nécessite pas de création de mot de passe. Un code est envoyé par mail ou par Tchap (service de messagerie pour les agent·e·s publics).

Ce site contient une démonstration d'intégration de la solution.

# Stack

Les stacks utilisées sont :

- Express (version 4.17.13)
- Node (version 17.0.31)

Les librairies utilisées :

- le DSFR - Système de Design de l'État (version 1.5.1)

# Setup

- Commencer par les commandes suivantes :

```
npm install
cp .env.sample .env
```

- Compléter le fichier `.env`. Les variables d'environnement `CLIENT_SECRET`, `PROVIDER_URL` et `CLIENT_ID` sont à demander à l'équipe d'Authentification à l'adresse mail : authentification@beta.gouv.fr

- Lancer le serveur en local : `npm run-script dev`

**http://localhost:3000 is ready !**
