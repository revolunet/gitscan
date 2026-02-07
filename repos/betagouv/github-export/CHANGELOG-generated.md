## Changelog : github-export (derniers 30 jours)

### Résumé
Ce mois-ci, les améliorations se concentrent sur l'automatisation du nettoyage des dépôts Codeberg après migration, ainsi que sur la correction de bugs et l'amélioration de la robustesse des workflows de migration. Des ajustements ont été apportés pour exclure les branches de pull request et permettre une meilleure gestion des dépôts inactifs.

### Évolutions fonctionnelles
- Ajout d'un workflow pour nettoyer les dépôts Codeberg inactifs après la migration (#112b127).
- Possibilité d'exclure les dépôts inactifs de la migration grâce à la nouvelle option `exclude_inactive_days` (#a98e829).
- Correction d'un bug qui empêchait la synchronisation (#763bfdc, #5e99964).
- Exclusion des branches de pull request lors de la migration pour une meilleure gestion des branches (#a39f34d).

### Évolutions techniques
- Amélioration de la gestion de l'état de la migration dans les workflows GitHub Actions (nombreux commits par `github-actions[bot]`).
- Correction d'un bug dans le workflow de migration (#a5dd50b).
- Renommage d'une variable pour une meilleure clarté du code (#840c420).

### Autres changements
- Mise à jour de la documentation du projet (#ed367e6).
