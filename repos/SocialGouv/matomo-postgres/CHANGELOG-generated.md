## Changelog : matomo-postgres (derniers 30 jours)

### Résumé
Ce changelog présente les récentes améliorations apportées à l'outil matomo-postgres, qui synchronise les données d'analyse de Matomo vers une base de données PostgreSQL. Les mises à jour se concentrent sur la correction de bugs, notamment une fuite de mémoire et des problèmes liés à la migration vers pnpm, ainsi que sur l'amélioration du processus de publication des versions.

### Évolutions fonctionnelles
- Correction d'une fuite de mémoire qui pouvait affecter les performances de l'application (#91).
- Correction d'un problème d'importation dans les tables non partitionnées.

### Évolutions techniques
- Migration vers pnpm pour la gestion des dépendances (#89).
- Amélioration du processus de publication des versions (plusieurs commits de `devthejo` concernant `npm release`).

### Autres changements
- Correction d'un problème de race condition lors de la création des partitions (#88 - non inclus dans l'extrait de commit fourni).
