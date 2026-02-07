## Changelog : complements-alimentaires (derniers 30 jours)

### Résumé
Ce mois-ci, les évolutions se concentrent sur l'amélioration de l'accessibilité, la sécurité et la maintenance technique du projet. Des corrections ont été apportées pour améliorer l'expérience utilisateur, notamment sur les pages d'administration et les tableaux de données. Des mises à jour de dépendances ont également été effectuées pour assurer la stabilité et la sécurité de la plateforme.

### Évolutions fonctionnelles
- Ajout de la possibilité d'inclure le SIRET et la TVA dans l'export des données des SD (#2683).
- Amélioration de l'accessibilité des rôles via des balises appropriées (#2641).
- Correction d'un problème d'affichage sur la page des collaborateurs pour les petits écrans (#2602).
- Correction d'un problème d'affichage sur les tableaux des instructions et des visas (#2641).
- Amélioration de l'accessibilité des boutons de modification et des titres des étapes du processus (#2628).
- Ajout d'un nouveau domaine pour les rôles contrôle (#2624).
- Correction d'un bug empêchant la suppression correcte des déclarations en raison d'un dépassement de capacité (#2643).
- Correction pour permettre la suppression des droits d'auteur sur une déclaration (#2653).
- Amélioration de l'URL de l'administration Django pour une meilleure personnalisation (#2661).

### Évolutions techniques
- Mise en place d'une stratégie Content Security Policy (CSP) pour renforcer la sécurité de l'application (#2656, #2684).
- Refonte de la gestion des styles en ligne dans l'interface utilisateur pour améliorer la maintenabilité et la performance (#2676, #2678).
- Mise à jour de plusieurs dépendances Python (Django, urllib3, botocore, kombu, etc.) pour bénéficier des dernières corrections de sécurité et améliorations de performance (#2630, #2634, #2635, #2636, #2637, #2638, #2639, #2640, #2644, #2645, #2646, #2647, #2665, #2666, #2667, #2668, #2669, #2670, #2671, #2679).
- Mise à jour des dépendances frontend (npm) : eslint-plugin-vue, prettier, babel, etc. (#2672, #2673, #2674).
- Amélioration de la configuration Docker (#2677).
- Suppression de l'utilisation de `mark_safe` dans l'administration Django pour des raisons de sécurité (#2678).
- Mise à jour de la version de Python et autres ajustements pour maintenir la compatibilité avec les mises à jour des packages (#2676).

### Autres changements
- Ajout d'un banner d'environnement pour identifier la plateforme en production (#2646).
- Amélioration de la documentation et ajout de contexte pour certains composants (#2642).
- Suppression de code inutile et refactoring de certains composants (#2653).
- Ajout de tests pour la suppression des droits d'auteur sur une déclaration (#2653).
- Ajout de commentaires et de précisions dans le code.
- Mise à jour des fichiers de configuration.
- Suppression de l'utilisation de styles en ligne dans l'interface utilisateur.
