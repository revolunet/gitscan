## Changelog : vizeau (derniers 30 jours)

### Résumé
Les dernières mises à jour de Vizeau apportent des améliorations significatives à l'expérience utilisateur, notamment au niveau de la cartographie, de la gestion des exploitations et des tâches. De nouvelles fonctionnalités ont été ajoutées, comme la gestion des logs utilisateurs, l'édition des millésimes passés et l'attribution de parcelles. Des corrections de bugs et des optimisations de performance ont également été réalisées.

### Évolutions fonctionnelles
- Ajout de la possibilité d'éditer les millésimes passés (#189, #161).
- Implémentation de l'attribution de parcelles (#143).
- Ajout d'un journal des actions utilisateurs pour suivre les parcours et améliorer l'application (#158).
- Amélioration des popups de la carte avec de nouvelles informations et une meilleure gestion (#172, #165, #156).
- Ajout d'une échelle sur la carte pour une meilleure lisibilité (#213).
- Ajout de nouveaux filtres sur les cultures dans la cartographie (#212).
- Possibilité de déselectionner une exploitation directement sur la carte (#185).
- Amélioration de la visibilité des exploitations : les utilisateurs ne voient plus que leurs propres exploitations et celles créées par l'administrateur (#228).
- Ajout de la gestion des groupes de cultures (#159).
- Ajout de la gestion des types d'agriculture (#160).
- Ajout de boutons pour afficher/masquer les différentes couches de la carte (#157).
- Correction d'erreurs dans la console (#222).
- Ajout d'un bouton de recentrage de la carte (#219).
- Ajout de la possibilité de supprimer des entrées de log avec une confirmation (#220).
- Amélioration de l'affichage des notes dans les entrées de log (#220).
- Amélioration de la gestion des tags et de leur affichage (#215, #216, #218).

### Évolutions techniques
- Mise à jour des dépendances npm et yarn pour corriger des vulnérabilités de sécurité (CVE-2026-21440 et CVE-2026-22814) (#172).
- Refactorisation et amélioration de composants UI : `ListItem`, `SelectorMenu`, `AlertDrawer`, `Toaster` (#169, #174, #179, #182, #183).
- Amélioration de la structure du code et des tests.
- Mise en place d'une action GitHub pour vérifier le fichier `package-lock.json` (#157).
- Correction pour assurer le lancement des migrations à chaque déploiement sur Scalingo (#230).

### Autres changements
- Mise à jour de la documentation pour l'exécution des migrations en production (#189).
- Amélioration des données de test pour le MVP (#184).
- Corrections de typographie et de wording dans l'interface utilisateur (#223, #225, #226, #214, #162).
- Ajout de commentaires et de documentation dans le code.
- Amélioration de l'expérience de développement avec Storybook.
