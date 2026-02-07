## Changelog : Dossier-Facile-Frontend (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations apportées à Dossier-Facile-Frontend au cours des 30 derniers jours. Les principales évolutions concernent une refonte majeure de la gestion des liens de partage, avec de nouvelles fonctionnalités comme la pause/réactivation de liens, la suppression, la création, des détails sur les liens partagés, et une page dédiée. Des améliorations d'accessibilité et des corrections de bugs ont également été implémentées.

### Évolutions fonctionnelles
- **Gestion des liens de partage :** Refonte complète de la gestion des liens de partage avec une nouvelle page dédiée (/partages) (#1867).
- **Pause/Réactivation des liens :** Possibilité de mettre en pause ou de réactiver les liens de partage (OWNER et PARTNER) (#1864, #1868).
- **Suppression des liens :** Ajout de la fonctionnalité de suppression des liens de partage (#1867).
- **Détails des liens :** Affichage des détails des liens de partage, incluant les dates de première et dernière visite (#1867).
- **Création de liens :** Nouvelle fonctionnalité permettant de créer des liens de partage (#1867).
- **Prévisualisation du dossier :** Ajout d'une page de prévisualisation du dossier (/mon-dossier) (#1867).
- **Amélioration de l'accessibilité :** Correction de problèmes d'accessibilité, notamment sur mobile et pour les éléments de navigation (#1850, #1864).
- **Authentification Trigram :** Application obligatoire de l'authentification Trigram lorsque la fonctionnalité est déployée (#1861).
- **Gestion des fichiers non validés :** Gestion améliorée des fichiers non validés (#1867).

### Évolutions techniques
- **Refactoring :** Utilisation des composants DSFR (Design System des Finances Publiques) pour le sélecteur dans la page de partage (#1867).
- **Tests :** Ajout et amélioration des tests, notamment pour la page de partage et l'accessibilité (#1867).
- **Suppression de code obsolète :** Suppression des anciennes pages de partage (#1867).
- **Mise à jour des dépendances :** Mise à jour de la version de pnpm et d'autres dépendances (#1812, #1851).

### Autres changements
- **Documentation :** Ajout d'un modèle pour les issues d'accessibilité (#1816).
- **Corrections de bugs mineurs :** Diverses corrections de bugs et améliorations de code (#1851, #1868).
- **Tracking :** Ajout de tracking sur les actions de partage (#1867).
