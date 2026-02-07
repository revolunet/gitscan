## Changelog : sill-deploy (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à sill-deploy au cours des 30 derniers jours. Les principales évolutions concernent l'import de métadonnées depuis GitHub et GitLab, l'amélioration de l'interface utilisateur pour l'affichage des informations des logiciels, et des corrections de bugs pour assurer une meilleure stabilité et une meilleure expérience utilisateur. Des améliorations techniques ont également été apportées, notamment au niveau du déploiement et de la gestion des versions.

### Évolutions fonctionnelles
- Ajout de l'import de métadonnées depuis GitLab. (#291)
- Ajout de l'import de métadonnées depuis GitHub, avec une mise à jour complète des informations. (#291, #317)
- Amélioration de l'affichage des informations des logiciels, incluant l'ajout de métadonnées de dépôt et l'historique d'activité partielle. (#203)
- Correction de la traduction française de "publicInstanceCount".
- Ajout d'options de formatage de date dans l'interface utilisateur. (#203)
- Ajout d'une option de configuration de l'interface utilisateur. (#203)
- Correction de l'affichage des métadonnées de dépôt. (#203)

### Évolutions techniques
- Refactorisation du code pour améliorer la structure et la maintenabilité.
- Mise en place d'un workflow de déploiement réutilisable et ajout d'un environnement de pré-production Scaleway.
- Mise en place d'un workflow quotidien pour la synchronisation avec le dépôt upstream.
- Migration des routes des logiciels de leur nom vers leur identifiant.
- Migration de la colonne `versionMin` vers les attributs personnalisés.
- Suppression de code mort et de références obsolètes.
- Amélioration de la gestion des tests.
- Correction de bugs liés à l'environnement et à la configuration.

### Autres changements
- Mise à jour de la version du projet.
- Suppression de l'utilisation de dotenv dans les tests.
- Amélioration de la gestion des erreurs et des logs.
- Correction de bugs mineurs dans l'interface utilisateur.
- Suppression de code dupliqué dans la liste des catalogues.
