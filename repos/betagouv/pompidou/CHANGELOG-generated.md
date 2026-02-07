## Changelog : pompidou (derniers 30 jours)

### Résumé
Ce changelog fait état d'une amélioration significative de l'intégration de Pompidou avec Grist, un outil de collaboration.  De nouvelles fonctionnalités permettent de synchroniser des données concernant les missions et les membres de la communauté beta.gouv.fr avec Grist, facilitant ainsi leur gestion et leur suivi. Des améliorations techniques ont également été apportées pour la configuration et le déploiement de l'application.

### Évolutions fonctionnelles
- Synchronisation des membres de la communauté avec une table dans Grist (#1).
- Ajout de la date de fin de la dernière mission active dans Grist.
- Synchronisation des startups avec un document Grist.

### Évolutions techniques
- Introduction d'un système de "mission control" pour gérer les tâches asynchrones.
- Refonte de l'architecture des jobs pour utiliser un seul `SyncGristDocumentsJob`.
- Amélioration de la configuration pour utiliser la variable d'environnement `DATABASE_URL`.
- Mise à jour de Ruby vers la version 4.0.1.
- Ajout d'un `Procfile` pour faciliter le déploiement sur Scalingo.
- Isolation du schéma SolidQueue dans sa propre structure.
- Refactorisation du code pour améliorer la lisibilité et la maintenabilité.

### Autres changements
- Ajout d'un fichier README pour le projet.
- Mise à jour des gems et des règles Rubocop.
- Amélioration des tests pour les jobs.
- Upgrade de Rails.
