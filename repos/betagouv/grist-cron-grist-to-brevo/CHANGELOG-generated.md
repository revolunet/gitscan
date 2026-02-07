## Changelog : grist-cron-grist-to-brevo (derniers 30 jours)

### Résumé
Ce projet a récemment été mis à jour pour améliorer la qualité des données synchronisées avec Brevo. Les modifications incluent une validation plus stricte des adresses email, l'exclusion des adresses invalides des requêtes et la suppression des attestations. Ces améliorations visent à garantir que seuls les emails valides sont envoyés via Brevo.

### Évolutions fonctionnelles
- Amélioration de la validation des adresses email en utilisant une expression régulière W3C plus robuste (#12).
- Exclusion des utilisateurs avec des adresses email invalides des requêtes de synchronisation (#12).
- Suppression des attestations (#13).

### Évolutions techniques
- Limitation de la taille des lots d'utilisateurs (#10).
