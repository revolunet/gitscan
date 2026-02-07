## Changelog : csplab (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a concentré ses efforts sur l'amélioration de l'ingestion d'offres d'emploi, l'intégration du traitement de CV (notamment via l'OCR) et l'amélioration de l'environnement de développement avec de nouveaux outils de linting et de formatage. Des améliorations ont également été apportées à l'automatisation des releases et à la documentation du projet.

### Évolutions fonctionnelles

- Intégration d'une page de téléchargement de CV pour les candidats (#53).
- Implémentation de l'OCR pour l'extraction de texte des CV via OpenAI (#46).
- Intégration minimale d'une page de traitement de CV pour les candidats (#102).
- Intégration de la page d'accueil pour les candidats (#37).
- Ajout de la récupération des offres depuis TalentSoft via un client front office (#95).
- Définition des entités et des objets de valeur pour les offres (#92).
- Ajout d'un dépôt pour les offres (#103).

### Évolutions techniques

- Refactorisation et nettoyage des tests d'ingestion (#130).
- Mise à jour de l'entité "offre" et des objets de valeur associés (#128).
- Migration du CSS vers SCSS modulaire pour une meilleure organisation et maintenabilité (#115, #100).
- Amélioration du tooling frontend avec l'ajout de Prettier et Stylelint (#121).
- Mise à jour de la version de Python pour Mypy et correction de la syntaxe dans `domain/types.py` (#110).
- Utilisation de fixtures au lieu de méthodes setup dans les tests pour une meilleure gestion des conteneurs (#59).
- Configuration de Sass tooling (#100).
- Ajout de djLint pour le linting et le formatage des templates Django (#101).
- Utilisation de N-1 processeurs pour l'exécution de la suite de tests Tycho afin d'optimiser les performances (#83).
- Amélioration du calcul de la couverture de code (#79).
- Automatisation de la génération du changelog et des releases (#56, #81, #87).
- Vérification de la présence du label "changelog" sur les PR pour la génération du changelog (#50).

### Autres changements

- Mise à jour des dépendances (tycho, notebook) (#137, #136, #114).
- Partage de la configuration VSCode pour une meilleure cohérence de l'environnement de développement (#55).
- Ajout de modèles d'issues en français (#85).
- Mise à jour du fichier `.gitignore` (#90).
- Suppression de la configuration `docker-compose.override.yml` pour simplifier la configuration locale (#80).
- Exploration des DTOs TalentSoft (#124).
- Correction de la configuration des URLs des candidats (#92).
- Suppression d'un job de formatage de commit inutile (#48).
- Ajout de modèles d'issues (#57).
