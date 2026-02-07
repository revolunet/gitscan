## Changelog : a-just (derniers 30 jours)

### Résumé
Les dernières mises à jour d'a-just se concentrent sur l'amélioration de la qualité et de la fiabilité du logiciel. Des corrections de bugs ont été apportées, notamment concernant l'extracteur de données et l'affichage d'informations. L'infrastructure de tests automatisés a été renforcée avec l'ajout de tests E2E et l'amélioration du processus d'intégration continue. Des optimisations de performance et des corrections d'interface utilisateur ont également été réalisées.

### Évolutions fonctionnelles
- Correction d'un bug empêchant l'affichage correct des logs dans l'endpoint `filterListNew` (#418).
- Amélioration de l'interface utilisateur pour l'exportation de situations d'agents (simplification du libellé du bouton).
- Correction de l'affichage des couleurs d'arrivées.
- Correction de l'accès à l'outil de reaffectation.
- Correction de l'affichage de la date de dernière mise à jour du type d'agent.
- Amélioration de l'affichage des compteurs sans données.
- Correction de ratios et de tooltips.
- Optimisation de la projection du graphique.

### Évolutions techniques
- Amélioration du processus de tests E2E : simplification de l'image Docker, réduction de la consommation de mémoire pour éviter les crashes sur GitHub Actions, ajout de la gestion des screenshots.
- Refonte du script `run-e2e.sh` pour supprimer une étape de build redondante.
- Mise à jour de l'image Cypress utilisée pour les tests.
- Amélioration de la configuration de Cypress et des rapports de tests.
- Ajout de package-lock.json pour le frontend.
- Amélioration du débogage des workflows GitHub Actions.
- Mise à jour du cron pour les tests nocturnes.
- Ajout de l'upload des rapports Mochawesome dans GitHub Actions.
- Optimisation des scripts d'administration et de migration.
- Correction de la configuration des tests E2E.
- Suppression de la continuation sur erreur dans les tests E2E pour signaler correctement les échecs.

### Autres changements
- Fusion de branches `dev` et `sandbox`.
- Mise à jour de la version du projet.
- Suppression d'un fichier vide.
- Suppression de commentaires inutilisés.
- Ajout de fichiers pour les tests E2E.
- Modification du temps d'exécution des tests nocturnes.
- Ajout de fichiers pour les tests E2E.
- Optimisation des performances générales.
- Mise à jour du simulateur blanc.
- Correction de l'affichage des ratios.
- Ajout de logs Docker pour les tests E2E.
