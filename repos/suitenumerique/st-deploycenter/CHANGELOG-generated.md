## Changelog : st-deploycenter (derniers 30 jours)

### Résumé
Ce déploiement apporte des améliorations significatives à la gestion des comptes utilisateurs et des organisations, ainsi que des corrections de bugs et des optimisations pour l'import de données et l'interface utilisateur. De nouvelles fonctionnalités ont été ajoutées pour faciliter l'administration et l'intégration avec Keycloak.

### Évolutions fonctionnelles
- Ajout d'une interface utilisateur pour la gestion des comptes et des filtres pour les organisations (#28).
- Amélioration de l'affichage et du filtrage des organisations, avec ajout du type d'organisation (#25).
- Amélioration de la carte ProConnect, prête pour la production (#24).
- Correction d'un bug empêchant le téléchargement des jeux de données Datagouv.
- Correction du comportement par défaut de l'import de données DPNT pour toujours mettre à jour les métadonnées.
- Possibilité pour l'API des comptes de recevoir des POSTs en double.
- Amélioration des traductions de l'interface utilisateur.
- Ajout de la gestion des utilisateurs sans mot de passe via OIDC dans l'administration.

### Évolutions techniques
- Ajout de vérifications de l'état de santé du service Keycloak.
- Ajout d'un rôle d'administrateur.
- Mise à jour de l'administration Django pour les comptes.
- Amélioration de la gestion des droits d'accès (entitlements) avec la prise en charge de l'email du compte.
- Refonte des gestionnaires de services pour les comptes.
- Mise à jour de la collecte de métriques pour les comptes.
- Ajout de routes pour la gestion des comptes.
- Simplification de l'autorisation des opérateurs.
- Mise à jour des sérialiseurs pour le modèle Account.
- Ajout du modèle Account.

### Autres changements
- Correction de problèmes de linting dans l'administration.
- Amélioration de détails d'affichage mineurs.
