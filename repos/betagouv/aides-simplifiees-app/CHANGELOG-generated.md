## Changelog : aides-simplifiees-app (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à la plateforme Aides Simplifiées au cours des 30 derniers jours. Les changements incluent une refonte de l'infrastructure Docker, une documentation plus complète, des corrections de bugs et des améliorations de la robustesse de l'application, notamment au niveau de la validation des variables d'environnement et de la gestion des migrations de base de données.

### Évolutions fonctionnelles
- Ajout d'une protection par secret pour le endpoint de monitoring, renforçant la sécurité de l'application.
- Amélioration de la robustesse de la page de statistiques en gérant les cas où les données Matomo sont vides (#4412c48).
- Les migrations de base de données sont désormais idempotentes, ce qui signifie qu'elles peuvent être exécutées plusieurs fois sans provoquer d'erreurs (#55a0b07).
- Correction d'un bug dans le formulaire de déménagement concernant les étudiants salariés (mentionné dans le changelog existant 1.6.2).

### Évolutions techniques
- Refonte complète de l'infrastructure Docker avec des scripts améliorés pour le build et le déploiement.
- Ajout de cibles Makefile pour simplifier les opérations Docker (build, tests, etc.).
- Configuration des limites de ressources Docker par environnement via des variables d'environnement (#a4ddf97).
- Validation stricte des variables d'environnement et de la connexion à la base de données au démarrage de l'application.
- Utilisation d'un script pour valider l'existence de la base de données de test avant de lancer les tests.
- Consolidation des variables d'environnement dans les fichiers Docker Compose (#582798e).
- Simplification du script de health check et amélioration des messages de sortie.
- Mise à jour de l'application pour utiliser `appEnv` au lieu de `isPreprod` pour la configuration d'environnement (#370a25a).

### Autres changements
- Documentation complète de l'architecture de l'application, incluant les Vues, les Événements, l'Infrastructure, le Logging et les Tests.
- Mise à jour des conventions et des règles critiques de l'application.
- Nettoyage de la documentation obsolète et ajout de nouvelles documentations sur l'infrastructure et le logging.
- Suppression de la documentation de couverture de code obsolète.
- Refactorisation de la documentation pour utiliser des fichiers `.md` au lieu de `.llm.txt` (#8d7afe1).
- Ajout d'un script de seed pour initialiser la base de données.
- Amélioration des messages de sortie dans les scripts Docker et les fichiers Compose.
- Suppression de fichiers de documentation obsolètes.
