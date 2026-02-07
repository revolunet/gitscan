## Changelog : grist-utils (derniers 30 jours)

### Résumé
Ce mois-ci, les modifications apportées à `grist-utils` concernent principalement la configuration des environnements de test et de déploiement. Une correction a été apportée pour assurer le bon fonctionnement des exécutions quotidiennes et l'environnement par défaut a été modifié pour correspondre à l'environnement 'opi tests preprod'. Des mises à jour de dépendances ont également été effectuées pour maintenir la sécurité et la stabilité du projet.

### Évolutions fonctionnelles
- Modification de l'environnement par défaut pour les tests à 'opi tests preprod' (#77342ba)
- Correction de la configuration des environnements pour les exécutions quotidiennes (#34955da)

### Évolutions techniques
- Mise à jour de la dépendance `lodash` dans `/grist-deployment-tests` (#808d658)
- Mise à jour de la dépendance `undici` dans `/grist-deployment-tests` (#808d658)
