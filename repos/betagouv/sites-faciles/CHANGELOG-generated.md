## Changelog : sites-faciles (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à sites-faciles au cours des 30 derniers jours. Les modifications incluent la suppression de champs obsolètes, des améliorations de conformité (images décoratives, attributs alt), la mise à jour de la configuration du projet et l'ajout d'une validation automatique du fichier `publiccode.yml` dans le processus d'intégration continue.

### Évolutions fonctionnelles
- Amélioration de l'accessibilité : les images décoratives sont maintenant correctement marquées comme telles et les attributs `alt` vides ont été supprimés (#421).
- Changement de nom du projet (#418).

### Évolutions techniques
- Ajout d'un workflow de validation du fichier `publiccode.yml` pour garantir sa conformité (#376, #422).
- Suppression de champs obsolètes et des migrations associées (#420, b5f5dda).
- Réorganisation des migrations après rebase (5c9c7c3).
- Suppression d'anciennes migrations (cf9b1d5).

### Autres changements
- Mise à jour du fichier `publiccode.yml` (57aefe2).
- Ajout de nouvelles sections (fusionnée dans #388).
