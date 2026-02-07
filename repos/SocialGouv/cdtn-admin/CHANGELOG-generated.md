## Changelog : cdtn-admin (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à l'outil d'administration du Code du travail numérique au cours des 30 derniers jours. Les principales évolutions concernent l'ajout de notifications Mattermost lors des déploiements en production et des nouvelles versions, des corrections de bugs liés à l'affichage des données et des améliorations de la gestion des thèmes et des outils disponibles.

### Évolutions fonctionnelles
- Ajout d'un message de notification sur Mattermost après chaque nouvelle publication/release. (#1633)
- Ajout de la page permettant aux administrateurs d'ajouter des éléments pour la section "Quoi de neuf". (#1620)
- Ajout de l'outil externe "Mes démarches travail" à la liste des outils disponibles. (#1622)
- Correction de l'affichage de la première information de la section "Quoi de neuf" lorsque celle-ci commence le 1er du mois. (#1626)
- Correction de l'affichage des documents en double dans certains thèmes. (#1623)

### Évolutions techniques
- Modification de la génération des thèmes pour s'adapter au nouveau design. (#1628)
- Modification des sauvegardes (backups) pour les environnements de pré-production et de développement. (#1625)
- Correction de l'utilisation de `triplet` au lieu de `couple` dans les migrations. (#1631)
- Amélioration des messages de notification de déploiement sur Mattermost pour plus de clarté.
- Correction de l'URL du webhook Mattermost.
- Correction du canal Mattermost utilisé pour les notifications de suivi de mise en production.

### Autres changements
- Configuration pour l'envoi de notifications sur Mattermost lors des déploiements en production. (#1630)
