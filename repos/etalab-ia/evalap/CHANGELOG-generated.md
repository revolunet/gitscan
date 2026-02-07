## Changelog : evalap (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à evalap au cours des 30 derniers jours. Les principales évolutions concernent l'export des résultats vers Hugging Face Hub, la gestion du déploiement, la correction de bugs et l'amélioration de la documentation. Des améliorations ont également été apportées à l'interface utilisateur et à la gestion des configurations.

### Évolutions fonctionnelles
- Ajout d'une interface utilisateur Streamlit locale pour explorer les résultats des évaluations (restaurée pour le développement local) (#346).
- Possibilité d'exporter les résultats des expériences vers Hugging Face Hub, avec gestion des collections et des noms de dépôt (#346, #347).
- Ajout d'un script pour exporter les résultats vers Hugging Face Hub, incluant la gestion des erreurs et la création de README (#346).
- Ajout d'une redirection FastAPI vers la documentation de l'API pour une meilleure accessibilité (#348).
- Amélioration de la documentation avec des liens markdown et des instructions claires pour l'installation et l'utilisation (#348).

### Évolutions techniques
- Implémentation d'un déploiement conditionnel basé sur la variable d'environnement `DEPLOYMENT_ENABLED` (#347).
- Suppression de Streamlit de la configuration de production (supervisord.conf et compose.yml) pour optimiser le déploiement.
- Correction de la capture des PIDs dans les scripts `run_evalap.sh` et `pray.sh` pour une meilleure gestion des processus.
- Ajout de la bibliothèque `tabulate` pour améliorer le rendu des tableaux Pandas en Markdown.
- Refactorisation du script d'export vers Hugging Face pour une meilleure organisation des dépôts et des fichiers.
- Ajout de logique de nouvelle tentative pour les uploads vers Hugging Face afin d'éviter les erreurs de timeout.

### Autres changements
- Mise à jour de la documentation pour refléter les changements d'interface utilisateur et de configuration.
- Synchronisation des versions des dépendances avec `uv.lock`.
- Correction de liens markdown dans la documentation.
- Amélioration de la lisibilité de la documentation.
