## Changelog : recommandations-collaboratives (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a travaillé sur l'amélioration de la gestion des projets et des ressources, notamment en ajoutant des informations sur l'organisation associée aux projets et aux ressources. Des améliorations ont également été apportées à l'interface utilisateur, notamment pour la gestion des notifications et des liens externes, ainsi que des corrections de bugs et des optimisations de performance.

### Évolutions fonctionnelles
- Ajout de l'organisation associée aux projets dans la vue d'administration et lors de la création de projets (#1822, #1818).
- Amélioration de l'affichage des informations sur les projets, incluant l'adresse email du propriétaire, même en phase de pré-brouillon (#1850, #1843).
- Possibilité de consommer une recommandation directement depuis une notification de conversation, avec un style visuel amélioré (#1676).
- Ajout d'un lien vide accessible pour les liens externes (#1812).
- Suppression du message d'annonce de nouvelle fonctionnalité (#1831).
- Amélioration de l'affichage des questions et des préconditions dans les enquêtes (#1821).
- Ajout d'un champ pour l'organisation associée aux ressources (#1839).
- Amélioration de l'affichage des cartes utilisateurs (#1795).
- Unification des feuilles de style CSS pour les différents sites (#1793).

### Évolutions techniques
- Refactorisation du code pour supprimer les tâches de tagging (#1806).
- Suppression des applications obsolètes (#1827).
- Amélioration des performances des enquêtes en mettant en cache les signaux de session et en optimisant la logique de précondition (#1821).
- Mise à jour des dépendances : lodash (4.17.21 -> 4.17.23), tar (7.5.2 -> 7.5.7), urllib3 (2.6.2 -> 2.6.3), pynacl (1.5.0 -> 1.6.2), filelock (3.20.1 -> 3.20.3).
- Amélioration de l'API des ressources pour inclure le contenu et le résumé dans la vue détaillée (#1842).
- Suppression des migrations inutiles (#1788).
- Correction de problèmes liés aux liens externes et à l'accessibilité (#1811, #1826).
- Amélioration de la gestion des notifications (#1838, #1848).

### Autres changements
- Mise à jour de la documentation.
- Correction de bugs mineurs et améliorations de la qualité du code.
- Ajout de tests unitaires et d'intégration.
- Amélioration de la gestion des erreurs et des logs.
- Suppression de l'ancien tutoriel.
- Correction de problèmes de CSS et d'affichage.
- Ajout de commentaires et de documentation pour faciliter la maintenance du code.
