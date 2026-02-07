## Changelog : token-bureau (derniers 30 jours)

### Résumé
Les récentes mises à jour de token-bureau incluent des corrections de bugs liées à la migration vers pnpm, des améliorations de la gestion des permissions configurables, et des corrections concernant l'action GitHub (logs, support de Node 20). Une nouvelle version (0.0.7) a été publiée.

### Évolutions fonctionnelles
- Ajout de la configuration des permissions pour une gestion plus fine des accès (#5aec18b, #e879f95).
- Amélioration des logs de l'action GitHub pour faciliter le débogage (#cc7d4d3).

### Évolutions techniques
- Migration vers pnpm pour la gestion des dépendances (#cf06c37, #b959cea).
- Passage à Node 20 pour l'action GitHub et le chart Helm (#16f9c36).
- Refactorisation pour découpler le projet en un monorepo (#9e1141b).
- Amélioration du workflow de release (#aee02ba).
- Mise à jour pour utiliser la nouvelle API `GITHUB_CLIENT_ID` (#3def986).

### Autres changements
- Correction de bugs mineurs concernant l'action GitHub (#68daaf4, #57f761e, #f5057fa).
- Amélioration du chart Helm pour une meilleure intégration (#b1c9e6f).
- Nettoyage des logs et du code (#6d80f72, #d2dbae6, #46ab261).
- Corrections liées aux déploiements de permissions (#e4c9bb2).
- Correction d'un bug lié au serveur (#8b4f7dd).
