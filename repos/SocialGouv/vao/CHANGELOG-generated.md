## Changelog : vao (derniers 30 jours)

### Résumé
Les dernières mises à jour de vao se concentrent sur l'amélioration de l'expérience utilisateur, notamment dans la gestion des agréments et des séjours. Des corrections de bugs ont été apportées pour améliorer la robustesse de l'application, et des améliorations techniques ont été réalisées pour moderniser l'infrastructure et le processus de développement.

### Évolutions fonctionnelles
- Correction d'un problème d'acheminement des emails lors de la mise à jour du SIRET (#1160).
- Amélioration de la gestion des SIRETs : affichage d'un message clair en cas de SIRET inconnu (#1117, #1156, #1157).
- Ajout d'un titre sur les modales pour une meilleure clarté (#1150).
- Affichage des conditions générales d'utilisation (CGU) pour tous les utilisateurs (#1127).
- Affichage de l'historique des SIRET (#1128).
- Correction de l'affichage des comptes en double dans la liste des comptes (#1137).
- Amélioration de l'affichage et de l'adaptation de la page avec la mise à jour de DSFR (#1142).
- Correction d'un problème de signature OVA lors de la validation du compte (#1131).
- Correction du chargement par défaut des compétences de l'utilisateur (#1130).
- Suppression d'un affichage indésirable (#1129).

### Évolutions techniques
- Migration vers pnpm et amélioration du linting (#1125).
- Ajout de tests d'intégration pour l'acceptation des CGU (#1148).
- Vérification du typage dans Nuxt pour améliorer la qualité du code (#1138).
- Suppression des applications du docker-compose pour simplifier l'environnement de développement.
- Correction du schéma de téléphone pour l'export (#1161).
- Configuration de l'environnement de développement (#1164, #1165).
- Amélioration du tooling et des builds CI (#1125).

### Autres changements
- Nettoyage du linter et correction de problèmes associés.
- Correction de la configuration des dépendances pour les conteneurs de développement.
