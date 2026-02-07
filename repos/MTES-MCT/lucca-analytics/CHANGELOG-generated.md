## Changelog : lucca-analytics (derniers 30 jours)

### Résumé
Ce mois-ci, les mises à jour de lucca-analytics concernent principalement l'amélioration de la fiabilité et de la maintenance du processus de synchronisation des données. La planification de la synchronisation a été ajustée pour une exécution quotidienne à 9h UTC, et des optimisations ont été apportées à l'environnement d'exécution pour réduire les dépendances inutiles et améliorer la stabilité.

### Évolutions techniques
- La planification de la synchronisation des données a été modifiée pour s'exécuter tous les jours à 9h UTC (#f71a22f).
- L'environnement d'exécution a été optimisé en utilisant un buildpack AWS CLI dédié et en supprimant les dépendances Python inutiles (#6bd2e94).
