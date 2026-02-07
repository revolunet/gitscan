## Changelog : find (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à find au cours du dernier mois. Les principales évolutions concernent l'ajout de la suppression de documents par tags, des améliorations de la configuration et de la robustesse, ainsi que des corrections de bugs et des optimisations techniques. L'administration du projet a également été enrichie avec des outils de diagnostic et de test.

### Évolutions fonctionnelles
- Ajout de la possibilité de supprimer des documents par tags. (#45)
- Adaptation à la conversation RAG (Retrieval-Augmented Generation). (#30)
- Ajout d'un endpoint de suppression de documents. (#31)

### Évolutions techniques
- Migration de la gestion des dépendances Python de `pip` vers `uv` pour le projet et les actions CI/CD.
- Attente de la disponibilité du service OpenSearch avant l'exécution des tests.
- Suppression du fichier `setup.py`.
- Mise à jour de la configuration de production pour activer HSTS (HTTP Strict Transport Security).
- Correction d'une faute de frappe dans l'en-tête du token Bearer.
- Correction du type de données du timeout d'embedding (passage de string à integer).
- Normalisation des paramètres Sentry et mise à jour du code associé.
- Amélioration du chart Helm pour une meilleure gestion du déploiement.

### Autres changements
- Ajout d'un modèle de pull request sur GitHub.
- Ajout d'un autotest Sentry dans l'interface d'administration.
- Ajout d'une page de test "vibe coded" dans l'interface d'administration.
- Ajout d'un bouton "create_search_pipeline" dans l'interface d'administration.
- Correction de l'absence de fichiers `__init__.py` dans certains répertoires.
- Correction de problèmes de pylint après une mise à jour.
- Mise à jour de la version de Django de 5.2.6 à 5.2.9.
- Suppression des fichiers `.venv` lors de la compilation des messages.
