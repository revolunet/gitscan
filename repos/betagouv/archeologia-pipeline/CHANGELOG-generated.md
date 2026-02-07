## Changelog : archeologia-pipeline (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations apportées au plugin QGIS archeologia-pipeline au cours des 30 derniers jours. Les principales évolutions concernent l'amélioration de la robustesse du pipeline, l'ajout de fonctionnalités pour la détection par computer vision, et une refonte de l'architecture interne pour une meilleure maintenabilité et testabilité.

### Évolutions fonctionnelles
- Amélioration du pipeline QGIS avec des workers configurables, des styles par classe et une validation PDAL (#4).
- Ajout de métadonnées aux modèles et d'une icône d'information dans le plugin pour les afficher.
- Amélioration de la détection par computer vision : ajout d'un filtre de taille post-déduplication et possibilité d'exporter des données surdimensionnées.
- Possibilité de filtrer les classes sélectionnées pour la détection par computer vision.
- Correction d'un bug de déduplication du traitement des dalles.
- Amélioration de la gestion de l'annulation des traitements avec `CancellableFeedback`.

### Évolutions techniques
- Refonte de l'architecture interne avec l'ajout d'un `ComputerVisionService` pour centraliser l'orchestration de la computer vision et des tests unitaires associés.
- Extraction de l'exécution du pipeline dans un `PipelineController` et des "mode runners" pour une meilleure organisation.
- Ajout d'un workflow GitHub Actions pour les tests automatisés.
- Mise en place de Talisman pour la sécurité du code (pré-push hook).
- Suppression du suivi de `old_src` dans le dépôt.
- Documentation de la génération du runner externe.

### Autres changements
- Mise à jour du fichier `metadata.txt`.
- Mise à jour du copyright dans le fichier `LICENSE`.
- Ajout de sections Architecture et Tests au fichier `README`.
- Nettoyage du code et suppression de messages de log dupliqués concernant la détection du proxy.
- Amélioration de la détection automatique de la disponibilité du proxy et basculement vers une connexion directe en cas d'échec.
- Correction d'un crash lié à la computer vision.
- Mise à jour du checksum pour le fichier `main_dialog.py`.
