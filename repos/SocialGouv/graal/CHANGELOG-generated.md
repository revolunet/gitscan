## Changelog : graal (derniers 30 jours)

### Résumé
Les dernières mises à jour de GRAAL se concentrent sur l'amélioration de la robustesse du pipeline de traitement des amendements, l'ajout de nouvelles fonctionnalités pour la gestion des bases de données d'amendements et l'optimisation des performances. Des améliorations ont également été apportées à l'interface utilisateur pour faciliter la gestion des fichiers et des configurations.

### Évolutions fonctionnelles
- Ajout d'un filtre par mission pour le traitement des amendements.
- Amélioration de l'interface d'administration pour afficher les noms de fichiers et les métadonnées dans l'onglet "input pool".
- Possibilité d'ajouter des amendements à des bases de données existantes.
- Affichage d'un meilleur retour d'information lors de la construction des bases de données d'amendements.
- Correction d'un bug empêchant la suppression des manifestes de base de données si le fichier S3 n'existait pas.
- Correction d'un bug empêchant la validation si une fonctionnalité n'était pas activée pour un projet d'origine.
- Correction d'un bug où les mots-clés étaient comptés deux fois.
- Ajout d'un titre à l'onglet GRAAL.

### Évolutions techniques
- Utilisation d'exécuteurs partagés pour décharger les tâches gourmandes en CPU.
- Utilisation de variables d'environnement pour les uploads S3.
- Refactorisation de la gestion de la configuration pour la page de traitement.
- Amélioration de la gestion des requêtes OAuth en les stockant dans la base de données PostgreSQL.
- Utilisation de l'ID de la base de données au lieu du fichier de base de données.
- Amélioration des opérations asynchrones dans le pipeline de traitement.
- Migration vers pnpm (#208).
- Amélioration du hook precommit pour la détection de secrets.
- Remplacement de l'énumération `DbRoleEnum` par une source backend.
- Rendre le chargement de fichiers et le prétraitement asynchrones.

### Autres changements
- Légère amélioration des appels à `require_db_role` en fournissant l'utilisateur.
- Ajout d'un test frontend au Makefile.
- Désactivation de la récupération cnpg.
