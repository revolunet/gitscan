# Recoco-sync

Recoco-sync est une application qui permet la synchronisation des portails de [Recommandations Collaboratives](https://github.com/betagouv/recommandations-collaboratives) avec des applications tierces. Un webhook permet de notifier des modifications apportées sur les dossiers. Recoco-sync permet de créer une configuration pour s'abonner à ces événements de webhook et pousser les données vers des applications tierces.

## Stack technique

La plateforme est basée sur le framework [Django](https://www.djangoproject.com/), et une base de donnée [PostgreSQL](https://www.postgresql.org/).

Des tâches asynchrones sont déployées, notamment pour traiter les événements entrants du webhook. La librairie [Celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) est utilisée pour cela, avec [Redis](https://redis.io/fr/).

Plusieurs outils et processus sont utilisés pour gérer la qualité de code. Trouvez les détails d'installation de l'application en local pour le développement sur la documentation dédiée : [DEVELOPPEUR.md](doc/DEVELOPPEUR.md). Trouvez les détails du déploiement de l'application sur la documentation dédiée : [DEPLOIEMENT.md](doc/DEPLOIEMENT.md).

## Architecture

Voir la documentation dédiée [ARCHITECTURE.md](doc/ARCHITECTURE.md).

## Configuration

### Variables d'environnement

```js
# Base de données
DATABASE_URL=postgresql://user:pass@localhost/dbname

# Redis (Celery)
REDIS_URL=redis://localhost:6379/0

# Grist
GRIST_API_KEY=your_grist_api_key
GRIST_BASE_URL=https://grist.numerique.gouv.fr

# Les Communs
LESCOMMUNS_API_KEY=your_lescommuns_api_key
LESCOMMUNS_BASE_URL=https://api.lescommuns.org
LESCOMMUNS_RESOURCE_TAG_NAME=les-communs
LESCOMMUNS_PROJECT_SELECTION_ENABLED=true
```

### Configuration des connecteurs

Chaque connecteur peut être configuré via l'interface d'administration Django :

- Webhook Config: Configuration du webhook source
- Connector Config: Paramètres spécifiques au connecteur
- Mapping Rules: Règles de transformation des données

## Traitements

Les tâches de traitement sont déclenchées sur réception des évenements de webhook, mais peuvent aussi être lancées manuellement via des actions depuis django-admin, depuis le panel des configurations des connecteurs.
