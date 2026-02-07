## Changelog : conseillers-entreprises (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations apportées au service Conseillers-Entreprises au cours des 30 derniers jours. Les modifications incluent des améliorations de la performance, la suppression de fonctionnalités obsolètes, des corrections de bugs, et des ajustements pour une meilleure conformité aux normes d'accessibilité (RGAA). Des modifications ont également été apportées à la gestion des données et à l'importation d'experts.

### Évolutions fonctionnelles
- Correction d'un bug qui provoquait une erreur 404 lors de l'accès à l'URL "entreprendre" (#4192).
- Amélioration de la gestion des experts importés via CSV, notamment pour les managers sans équipe (#4187).
- Ajout de dates de démonstration pour 2026 (#4192).
- Ajout d'indicateurs de comptage des besoins et de taux de refus par sujet dans les statistiques (#4194).
- Suppression de la fonctionnalité de recherche d'entreprises, simplifiant ainsi l'interface et le flux de création de diagnostics (#4181).
- Amélioration de la gestion des codes INSEE dans les formulaires et les services, avec validation du format (#4202).
- Correction d'un bug qui empêchait l'affichage correct des utilisateurs administrateurs (#4190).

### Évolutions techniques
- Refactorisation du code pour supprimer des dépendances inutiles et améliorer la lisibilité.
- Suppression des modèles `Commune` et `Territory` et remplacement par `TerritorialZone` (#4181).
- Remplacement de l'utilisation de `api-address` par la gem `decoupage-administratif` pour l'autocomplétion de localisation (#4202).
- Amélioration de la performance de l'affichage des utilisateurs administrateurs en préchargeant les données (#4190).
- Mise à jour de la gem `aws-sdk-s3` de la version 1.204.0 à la version 1.208.0 (#4176).
- Mise à jour de la gem `@hotwired/turbo` de la version 8.0.20 à la version 8.0.21 (#4186).
- Mise à jour de la gem `lodash` de la version 4.17.21 à la version 4.17.23 (#4213).
- Refactorisation de la gestion des URL des partenaires pour une meilleure maintenabilité (#4193).
- Ajout de tests RSpec pour valider les corrections et les nouvelles fonctionnalités.
- Amélioration de la structure du code et suppression de code obsolète.

### Autres changements
- Amélioration de l'accessibilité (RGAA) de l'interface utilisateur, notamment en améliorant la structure des titres, des listes et des contrôles de formulaire (#4185).
- Mise à jour de la version de Chrome dans la configuration CircleCI (#4181).
- Suppression de tâches Rake obsolètes (#4185).
- Ajout d'un délai d'exploration (crawl-delay) au fichier `robots.txt` pour éviter une surcharge des serveurs par Bing (#4228).
- Suppression de la règle `disallow` pour `/e` dans le fichier `robots.txt` (#4228).
- Correction de la pagination Kaminari pour afficher par défaut 25 éléments par page (#4225).
- Correction d'une erreur dans la gestion des redirections (#4215).
- Amélioration de la documentation et des commentaires dans le code.
- Corrections de style et de linting.
