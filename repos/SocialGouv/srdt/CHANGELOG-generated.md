## Changelog : srdt (derniers 30 jours)

### Résumé
Les dernières mises à jour de SRDT apportent des améliorations significatives à l'expérience utilisateur, notamment l'enregistrement des discussions, l'ajout d'un bouton de support et une nouvelle version du prompt pour des réponses plus précises. Des corrections de bugs ont également été implémentées pour améliorer la stabilité et la compatibilité du système. L'infrastructure a été modernisée avec la migration vers pnpm et l'ajout d'un cluster PostgreSQL.

### Évolutions fonctionnelles
- Ajout d'un bouton de support pour faciliter l'accès à l'aide (#296)
- Sauvegarde des discussions dans la base de données (#298)
- Nouvelle version du prompt (v2.0) pour des réponses plus pertinentes (#284)
- Possibilité de spécifier le département et d'utiliser un hash d'email dans les sessions Matomo (#297)
- Correction permettant d'autoriser le département "dreets" (#301)
- Mise à jour des domaines pour proconnect (#288)
- Correction du prompt avec des règles strictes pour les citations (#280)
- Restauration de la récupération complète des documents avant la génération de la réponse.

### Évolutions techniques
- Migration vers pnpm pour la gestion des paquets (#277)
- Ajout d'un cluster PostgreSQL (#299)
- Ajout des secrets PostgreSQL à l'environnement web (#300)

### Autres changements
- Mise à jour des constantes (#283)
- Page d'instructions du prompt ajoutée (#281)
- Corrections de release forcées (#287, #285, #286)
