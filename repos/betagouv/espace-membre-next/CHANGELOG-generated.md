## Changelog : espace-membre-next (derniers 30 jours)

### Résumé
Les dernières mises à jour de l'espace membre se concentrent sur l'amélioration de la synchronisation des comptes utilisateurs, notamment avec les services DIMail et DINUM, et sur la correction de bugs liés à l'affichage et à la gestion des emails. Des améliorations ont également été apportées à la gestion des nouveaux utilisateurs et à la configuration de l'application pour une meilleure performance et fiabilité.

### Évolutions fonctionnelles
- Amélioration de la suite numérique d'onboarding pour les utilisateurs OVH (#1192).
- Correction de l'affichage du statut de l'email principal pour les membres, qui n'était pertinent que dans certains cas (#1190).
- Ajout de la prise en charge des emails `francetravail.fr` et `justice.fr` pour les emails publics (#1184).
- Correction d'un problème lié à la recréation d'utilisateurs qui pouvait affecter les comptes DIMail existants (#1189).

### Évolutions techniques
- Utilisation d'UUID au lieu de noms d'utilisateur pour la synchronisation DIMail, améliorant ainsi la robustesse et la sécurité (#1199).
- Synchronisation de la table `dinum_emails` pour assurer la cohérence des données utilisateurs (#1168).
- Ajout d'un script `npm` pour la synchronisation DIMail, facilitant l'automatisation de ce processus (#1186).
- Réduction de la limite de tentatives de reconnexion de `pgboos` pour améliorer la réactivité de l'application (#1191).
- Mise à jour de l'URL du webmail pour le plan OPI (#1200).
- Désactivation de la revalidation pour améliorer les performances (#1183).
- Ajout de `expireTime=0` pour éviter les problèmes de cache navigateur (#1175).
- Configuration de Sentry pour capturer les erreurs en production avec les source maps (#1174).
- Correction d'un problème lié à ESPACE-MEMBRE-WT (#1176).

### Autres changements
- Mise à jour de la documentation README.md (#1193).
- Corrections de logs pour une meilleure traçabilité (#1182).
