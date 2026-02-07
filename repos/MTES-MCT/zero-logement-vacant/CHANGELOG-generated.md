## Changelog : zero-logement-vacant (derniers 30 jours)

### Résumé
Ce mois-ci, les améliorations se concentrent sur la correction de bugs, l'amélioration de l'expérience utilisateur, notamment dans la gestion des documents et des listes de logements, ainsi que sur des optimisations techniques et la sécurité des dépendances. Des fonctionnalités ont été ajoutées pour la gestion des utilisateurs et l'export des données, et des améliorations ont été apportées à la cartographie et à l'intégration de données externes.

### Évolutions fonctionnelles
- Amélioration de l'interface pour l'édition groupée de logements, avec affichage des différences et gestion des précisions (#1548).
- Ajout de la possibilité d'ajouter des notes aux logements (#1533).
- Correction d'un bug empêchant le téléchargement de certains documents (#1534).
- Amélioration de la gestion des types de fichiers lors du téléchargement de documents (#1568).
- Ajout de la possibilité de filtrer les périmètres sans nom dans la liste déroulante (#1528).
- Inclusion des campagnes dans l'exportation groupée des données (#1526).
- Ajout de la classification des utilisateurs en fonction de leur type provenant du Portail DF (#1529).
- Ajout d'une colonne "Prestataires" dans la gestion des utilisateurs (#1494).
- Ajout de la possibilité d'ajouter une option "Pas d'information" pour les précisions (#1530).
- Ajout de la possibilité d'ajouter des limites administratives sur la carte (#1555).

### Évolutions techniques
- Refactorisation du code pour supprimer les champs de précision obsolètes (#1578).
- Migration vers `react-hook-form` pour simplifier et améliorer la gestion des formulaires (#1549).
- Mise à jour de plusieurs dépendances pour corriger des failles de sécurité et améliorer la performance (effect, lodash-es, posthog-js, etc.).
- Amélioration de l'infrastructure CI/CD pour les applications de revue du serveur (#1583, #1582).
- Ajout d'un script pour calculer les coûts Clever Cloud (#1556).
- Amélioration de la gestion des coordonnées géographiques et ajout de la reprojection automatique en WGS84 (#1539).
- Mise à jour de MapLibre GL et de ses styles (#1535).

### Autres changements
- Ajout de documentation pour la configuration des agents IA (AGENTS.md) (#1577).
- Suppression de fichiers de configuration et de code inutilisés.
- Mise à jour de la licence.
- Amélioration de la gestion des logs et ajout d'une exportation mensuelle vers S3/Cellar (#1527).
- Correction de typos et amélioration de la lisibilité du code.
- Mise à jour de la documentation.
