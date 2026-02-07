## Changelog : signalement-api (derniers 30 jours)

### Résumé
Ce changelog présente les récentes améliorations apportées à l'API SignalConso. Les mises à jour se concentrent sur l'optimisation de l'importation des utilisateurs, la gestion des alertes liées aux téléchargements de fichiers et l'amélioration de la robustesse du système face à certaines limites d'utilisation.

### Évolutions fonctionnelles
- Optimisation de l'importation des utilisateurs grâce à l'utilisation d'insertions groupées dans la base de données. (#2009)

### Évolutions techniques
- Ajustement du seuil d'alerte pour les téléchargements de fichiers afin d'éviter des notifications inutiles. (#2012)
- Ignorer les alertes Albert lorsque la limite d'utilisation est atteinte. (#2011)
