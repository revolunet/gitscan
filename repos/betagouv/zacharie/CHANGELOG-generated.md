## Changelog : zacharie (derniers 30 jours)

### Résumé
Les dernières mises à jour de Zacharie se concentrent sur l'amélioration de l'expérience utilisateur, notamment avec le lancement d'un nouveau tableau de bord pour le suivi des chasses et des carcasses. Des corrections de bugs ont été apportées pour améliorer la fiabilité et la clarté des informations affichées, ainsi que pour optimiser le processus de gestion des utilisateurs et des carcasses. Des améliorations techniques ont également été réalisées, notamment en matière de surveillance des performances et de gestion des erreurs.

### Évolutions fonctionnelles
- Ajout d'un tableau de bord pour le suivi des chasses et des carcasses (#117).
- Amélioration du formulaire de saisie des carcasses (#106).
- Possibilité de créer une fiche même si elle n'est pas active (#105).
- Affichage des animaux acceptés par le SVI (#112).
- Possibilité de clôturer une fiche si toutes les carcasses sont manquantes (#111).
- Ajout d'un message d'alerte concernant la trichine (#102).
- Ajout d'un feedback en cas d'erreur lors de la saisie du numéro de bracelet (#118).
- Amélioration de l'affichage des lots acceptés dans la vue tableau (#115).
- Possibilité de réinitialiser le mot de passe même si aucun n'a été défini auparavant.
- Suppression de la question sur le transport dans le formulaire.
- Les carcasses sans décision sont maintenant affichées comme acceptées (#124).
- Correction de l'affichage des statistiques d'hygiène (#115, #116).
- Correction de l'affichage des motifs SVI dans le dashboard.
- Correction du wording pour les utilisateurs non activés.
- Correction d'un bug empêchant l'enregistrement des commentaires sur une carcasse non refusée.
- Correction d'un bug lié au chargement des FEIs.

### Évolutions techniques
- Mise en place d'une surveillance des performances et des erreurs avec Sentry.
- Nettoyage du code et suppression de composants inutilisés.
- Amélioration de la gestion des relations entre les entités.
- Refonte de l'onboarding en plusieurs étapes (#110).
- Ajout de Matomo pour le suivi analytique.
- Mise à jour de certaines dépendances (react-router, qs, express) (#114, #109, #108).

### Autres changements
- Ajout de documentation sur l'architecture locale-first.
- Ajout d'un fichier `claude.md` pour la documentation.
- Amélioration des logs pour Sentry.
- Suppression des espèces Cailles et Oies de la liste.
- Correction de tests et ajout de tests pour Sentry.
- Ajout de react-toastify pour les notifications.
