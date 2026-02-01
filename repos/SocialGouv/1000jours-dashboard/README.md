# template

Le dashboard 1000j est une application [Next](https://nextjs.org/) développée par la [Fabrique des ministères sociaux](https://www.fabrique.social.gouv.fr/) et qui utilise le [Système de Design de l'État](https://gouvfr.atlassian.net/wiki/spaces/DB/overview).

## Description

### D'un point de vue fonctionnel

Ce dashboard est composé de page :

- Page principale

- Politique de confidentialité
- Mentions légales
- Conditions générales d'utilisation
- Statistiques d'utilisation (fonctionnant avec matomo)
- Déclaration d'accessibilité

### D'un point de vue technique

- [storybook](https://storybook.js.org/) permettant de réaliser des stories pour les composants
- [@testing-library](https://testing-library.com/) pour tester de manière unitaire les composants
- [jest](https://jestjs.io/) pour tester de manière unitaire le code
- [cypress](https://www.cypress.io/) pour tester en e2e le frontend
- [talisman](https://github.com/thoughtworks/talisman/) qui permet de prévenir la publication de secrets dans votre code
- un [Dockerfile](./Dockerfile) rootless de production basé sur nginx
- des [Content Security Policy et headers de sécurité de base](https://developer.mozilla.org/fr/docs/Web/HTTP/CSP)

- Côté Next.js:
  - intégration de [@codegouvfr/react-dsfr](https://github.com/codegouvfr/react-dsfr/) pour le [design système de l'état](https://www.systeme-de-design.gouv.fr/)
  - intégration de [sentry](https://sentry.io/) pour gérer les erreurs
  - intégration de [matomo](https://matomo.org/) pour les statistiques d'utilisation

- [Strapi](https://docs.strapi.io/) que l'on utilise comme BO et pour s'authentifier (via API)
- [next-auth](https://next-auth.js.org/) qui est un wrapper pour gérer l'authentification au sein de l'application (exclusive à `main`)
- [hasura](https://hasura.io) qui permet d'exposer une API GraphQL sur votre Postgres et de gérer les authorisations (RBAC)

## Lancer le code

Après avoir cloné le projet :

### Développement

:warning: Avant de lancer le projet, vous devez installer `gomplate`

```bash
pnpm install # to install dependencies
pnpm dev # to run in dev mode
```

### Gestion des environnements

Les variables issues des docker build-args, sont à utiliser dans `next.config.js`, pour les autres, il faut les définir dans les différents [`.env.*`](https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order).

Le fichier `.env.staging` est utilisé pour les environnements de review et de pré-production.

Le fichier `.env.development` est utilisé pour l'environnement de développement.

:warning: Les variables d'environnement sont publiques (utilisées durant le build), ne commitez donc pas de variables privées dans ces fichiers.

##### Tests

Lancer les tests en local :
```bash
pnpm test # tests unitairs exécutés dans la console
pnpm test:e2e # tests e2e : ouverture de cypress et l'exécution est lancé dans une fenêtre chrome
```

##### FranceConnect

Cf https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service

Dans les URLs de callback définies [sur le compte FranceConnect](), utiliser `https://[votre-hostname]/realms/app-realm/broker/franceconnect-particulier/endpoint` et `https://[votre-hostname]/realms/app-realm/broker/franceconnect-particulier/endpoint/logout_response`.

## Liens

- <https://template.fabrique.social.gouv.fr/> : Version en production du projet
- <https://socialgouv.github.io/template/> : Storybook liés à la branche principale du projet
- <https://github.com/socialgouv/keycloak-dsfr> : Thème keycloak-DSFR
- <https://socialgouv.github.io/support> : Documentation technique SocialGouv
