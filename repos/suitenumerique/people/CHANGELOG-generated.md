## Changelog : people (derniers 30 jours)

### Résumé
Les dernières mises à jour de l'application people se concentrent sur l'amélioration de la gestion des alias de messagerie, la correction de vulnérabilités de sécurité et l'optimisation de l'infrastructure. Des améliorations ont également été apportées à l'interface d'administration et à l'intégration avec Dimail.

### Évolutions fonctionnelles
- Possibilité de supprimer les invitations de domaine. (#1013)
- Gestion des alias : création, gestion et suppression d'alias depuis l'interface utilisateur et l'administration. (#1013)
- Suppression d'alias : possibilité de supprimer tous les alias associés à une partie locale d'adresse e-mail.
- Autorisation des alias et des boîtes aux lettres avec la même partie locale.
- Correction d'un bug empêchant l'importation correcte des alias depuis Dimail.
- Le premier utilisateur créé dans une organisation n'est plus automatiquement administrateur. (#776)
- Correction d'un bug lié à l'importation d'alias depuis l'administration. (#1021)

### Évolutions techniques
- Migration de la gestion des dépendances de `pip` vers `uv` pour améliorer la performance et la sécurité.
- Mise à jour de la version de Python pour corriger une vulnérabilité de sécurité.
- Séparation de la configuration du conteneur Dimail de l'environnement de développement.
- Refactoring de méthodes Dimail pour les rendre privées.
- Amélioration des tests liés à l'authentification après une mise à jour de `django-lasuite`.
- Mise à jour de plusieurs dépendances Python.

### Autres changements
- Suppression du plugin CommuneCreation.
- Mise à jour des chaînes de traduction.
- Publication des versions 1.22.2, 1.22.1 et 1.22.0.
- Suppression de commentaires inutiles dans les fichiers de permissions.
- Ignorer le dossier `.venv` lors de la compilation des messages.
