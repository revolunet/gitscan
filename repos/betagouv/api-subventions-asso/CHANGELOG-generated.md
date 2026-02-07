## Changelog : api-subventions-asso (derniers 30 jours)

### Résumé
Les dernières mises à jour de l'API et de l'interface utilisateur se concentrent sur l'amélioration de la gestion des fichiers SCdL, l'ajout de nouvelles fonctionnalités pour le téléchargement et l'analyse des données, ainsi que sur la correction de bugs pour une meilleure stabilité et expérience utilisateur. Des améliorations ont également été apportées à la documentation et à l'infrastructure.

### Évolutions fonctionnelles
- Possibilité de télécharger les subventions au format SCdL (#3794).
- Affichage des subventions sans année budgétaire (#3792).
- Ajout d'info-bulles (tooltips) au tableau de bord des subventions (#3779).
- Troncation des numéros SIRET multiples dans l'interface utilisateur (#3798).
- Ajout d'une alerte d'erreur globale dans l'interface utilisateur (#3762, #3751).
- Ajout d'une notification sur Mattermost lors du dépôt d'un fichier SCdL (#3793).
- Amélioration du comportement des boutons de tri dans le tableau de bord (#3795).

### Évolutions techniques
- Refactor de la recherche de SIREN pour une meilleure documentation et simplification (#3787).
- Utilisation d'opérations `bulkWrite` au lieu de `aggregate merge` pour améliorer les performances de l'API (#3780).
- Ajout d'un "debounce" pour la notification de perte de connexion (#3810).
- Suppression de `rm -rf` au profit de `rimraf` dans les scripts pour plus de sécurité (#3776).
- Amélioration de la gestion des erreurs lors de la migration (#3773).
- Ajout du nom à la collection `datalog` (#3771).
- Correction d'un bug empêchant l'écriture en base de données lors de `bulkWrite` si aucun document n'était à mettre à jour (#0000).

### Autres changements
- Mise à jour de la documentation concernant la convention de nommage des fichiers (#3680).
- Dockerisation de l'environnement local pour faciliter le développement (#3754).
- Publication des versions v0.77.2 et v0.78.0.
