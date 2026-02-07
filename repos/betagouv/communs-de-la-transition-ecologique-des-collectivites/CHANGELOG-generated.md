## Changelog : communs-de-la-transition-ecologique-des-collectivites (derniers 30 jours)

### Résumé
Cette mise à jour apporte des améliorations à l'intégration continue et au déploiement, ainsi qu'une optimisation de l'utilisation du modèle de langage Claude pour l'analyse des projets. Des corrections ont également été apportées pour assurer la cohérence des outils et des processus de build.

### Évolutions fonctionnelles
- Amélioration de l'analyse des projets grâce à l'utilisation du modèle Claude 4.5 Haiku, avec une augmentation du nombre maximal de tokens à 2048 pour une meilleure compréhension du contexte (#364).

### Évolutions techniques
- Correction dans le processus de CI/CD : utilisation de `ADMIN_PAT` pour contourner la protection des branches (#366) et du `GITHUB_TOKEN` au lieu de la clé SSH Scalingo pour le checkout du code (#365).
- Optimisation du build du widget en utilisant le nom complet du package dans le filtre pnpm (#363).
- Correction de l'ordre de build pour Scalingo (#362).
- Ajout de l'option `--url` à `sentry-cli inject` pour assurer la cohérence de la configuration Sentry (#361).
- Migration de l'API vers le modèle Claude Haiku 4.5 (#360).

### Autres changements
- Publication de la version 0.1.7 (#367).
