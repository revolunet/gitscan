## Changelog : docs (derniers 30 jours)

### Résumé
Les dernières mises à jour apportent des améliorations significatives à l'expérience utilisateur, notamment l'ajout de l'importation de documents, l'intégration de Waffle pour une configuration plus flexible, et des corrections de bugs pour une meilleure stabilité. Des améliorations de sécurité et des optimisations techniques ont également été réalisées.

### Évolutions fonctionnelles
- Ajout de la possibilité d'importer des documents (#1609).
- Intégration de Waffle configurable pour une personnalisation accrue (#1795).
- Ajout de la connexion silencieuse (silent login) pour une expérience utilisateur plus fluide (#1690).
- Ajout d'un champ pour le libellé des boutons dans les modèles d'email (#1817).
- Amélioration de l'accessibilité avec des corrections pour la navigation au clavier et les lecteurs d'écran (#1745, #1693, #1743).
- Ajout de statistiques Crisp pour un suivi de l'utilisation (#1824).

### Évolutions techniques
- Mise à jour de la configuration du cache backend.
- Refactorisation du code frontend pour une meilleure organisation (passage de `hook` à `hooks`).
- Amélioration de la validation des fichiers lors de la conversion.
- Mise à jour des dépendances : `lodash`, `js dependencies`, `docspec api`, `celery`, `python dependencies`.
- Suppression du code lié aux templates (frontend et backend).
- Ajout de tests pour la fonctionnalité d'importation de documents.
- Amélioration de la configuration du déploiement Kubernetes avec l'ajout de `docspec`.
- Utilisation de `langfuse` pour le suivi des actions d'IA.
- Mise à jour du thème Cunningham.
- Utilisation de `@gouvfr-lasuite/cunningham-react`.
- Suppression des tests liés à `django-lasuite`.
- Correction d'une erreur de type dans `TRASHBIN_CUTOFF_DAYS`.

### Autres changements
- Mise à jour de la documentation pour inclure la configuration de la langue.
- Correction de tests end-to-end (e2e) pour une meilleure fiabilité.
- Ajout d'un indicateur dans le CI pour signaler si le thème n'est pas à jour.
- Correction de vulnérabilités de sécurité (jaraco.context).
- Ajout d'un flag de fonctionnalité `FRONTEND_SILENT_LOGIN_ENABLED`.
- Amélioration des tests d'exportation PDF.
- Correction de bugs mineurs liés à l'affichage et au comportement de l'interface utilisateur.
- Mise à jour des chaînes de traduction.
- Suppression de la protection Trivy pour le backend.
- Augmentation de la taille maximale du corps de la requête pour le service Helm.
- Correction de tests instables.
- Correction de problèmes liés à l'exportation (NaN dans les colonnes, hauteur des lignes).
- Ajustement du typage pour les composants styled-component.
- Chargement de la police Marianne.
- Arrêt de la mise à jour automatique de `react-resizable-panels`.
- Ajout de la configuration de la taille maximale et de l'extension des fichiers.
- Correction d'un bug empêchant l'affichage des enfants après un redimensionnement.
- Correction d'un bug lié à la suppression de tableaux.
- Correction d'un bug lié à la préservation du texte tapé après le symbole "@".
