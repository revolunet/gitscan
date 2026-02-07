## Changelog : kube-dev (derniers 30 jours)

### Résumé
Ce dépôt a connu des modifications importantes concernant l'importation des données de Matomo vers PostgreSQL. De nouvelles fonctionnalités ont été ajoutées pour gérer ce transfert, tandis que d'anciennes configurations ont été supprimées. Des ajustements ont également été apportés aux ressources allouées à certaines tâches planifiées (cronjobs) pour améliorer leur performance.

### Évolutions fonctionnelles
- Ajout d'une nouvelle fonctionnalité pour importer les données de Matomo vers PostgreSQL via le job `matomo-to-pg-jdma` (#4120d23).
- Amélioration de la configuration des variables d'environnement pour le job `cronjob`, notamment l'ajout de `NODE_OPTIONS` (#8f9be4b).
- Augmentation des limites de ressources allouées au job `matomo-to-pg` pour une meilleure performance (#d494f98).

### Évolutions techniques
- Suppression de l'ancienne configuration et du job `matomo-to-pg-languia` (#fb9579d, #5b26899).
- Corrections diverses concernant l'importation des données PostgreSQL (#83c8ec8, #545be71, #1f7e52d, #efceecb, #0289773, #bc1f00c, #ffe6b27).

### Autres changements
- Nettoyage du code (#4324fb7).
- Ajout d'une vérification web (#02c00bf).
- Ajout d'une fonctionnalité "lychee" (#479d5e7).
- Correction d'un problème avec "jdma" (#980763f).
