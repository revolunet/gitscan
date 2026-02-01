# Mon Espace Collectivité connect

MEC-Connect est une application qui permet la synchronisation du portail "Mon Espace Collectivité" avec l'outil [Grist](https://donnees.incubateur.anct.gouv.fr/toolbox/grist), utilisé par l'[ANCT](https://agence-cohesion-territoires.gouv.fr/).

Mon Espace Collectivité est un portail bâti sur l'application [Recoco](https://github.com/betagouv/recommandations-collaboratives). Un webhook permet de notifier des modifications apportées sur les projets. MEC-Connect permet de créer une configuration pour s'abonner à ces événements de webhook et pousser les données vers des tables Grist.

## Solution technique

La plateforme est basée sur le framework [Django](https://www.djangoproject.com/), et une base de donnée [PostgreSQL](https://www.postgresql.org/).

Des tâches asynchrones sont déployées, notamment pour traiter les événements entrants du webhook. La librairie [Celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) est utilisée pour cela, avec [Redis](https://redis.io/fr/).

Plusieurs outils et processus sont utilisés pour gérer la qualité de code.

Trouvez les détails d'installation de l'application en local pour le développement sur la documentation dédiée : [DEVELOPPEUR.md](doc/DEVELOPPEUR.md).

Trouvez les détails du déploiement de l'application sur la documentation dédiée : [DEPLOIEMENT.md](doc/DEPLOIEMENT.md).

Les prochaines étapes sont listées [ici](doc/TODO.md).
