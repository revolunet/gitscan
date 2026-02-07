## Changelog : service-national-universel (derniers 30 jours)

### Résumé
Ce changelog présente les récentes mises à jour de la plateforme Service National Universel. Les modifications incluent la correction de problèmes liés à l'API d'adresse, la gestion des missions rattachées à des structures supprimées, et la décommission de certains domaines. Une mise à jour de sécurité d'une dépendance a également été effectuée.

### Évolutions fonctionnelles
- Correction de l'API de recherche d'adresse pour utiliser le nouveau point d'accès `data.geopf.fr` au lieu de l'ancien `api-adresse.data.gouv.fr` (#5240).
- Correction de la gestion des missions rattachées à des structures supprimées et des missions JVA non synchronisées (#5234).

### Évolutions techniques
- Décommissionnement de tous les domaines (#5214).

### Autres changements
- Mise à jour de la dépendance `validator` vers la version 13.15.22 pour corriger une vulnérabilité de sécurité (#5203).
