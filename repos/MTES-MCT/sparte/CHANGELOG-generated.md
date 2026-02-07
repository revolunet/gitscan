## Changelog : sparte (derniers 30 jours)

### Résumé
Les dernières mises à jour de sparte se concentrent sur l'ajout de fonctionnalités de territorialisation, permettant une analyse plus fine des objectifs de réduction de l'artificialisation des sols. L'interface utilisateur a également été améliorée, notamment avec une refonte de la page des diagnostics et une correction de l'année affichée dans les rapports locaux. Des améliorations techniques ont été apportées pour optimiser la gestion des données et des performances.

### Évolutions fonctionnelles
- Correction de l'année affichée dans les rapports locaux (#1424)
- Ajout d'un paramètre utilisateur optionnel aux graphiques d'artificialisation et de consommation (#1421)
- Refonte de la page des diagnostics avec une nouvelle interface et suppression des pages obsolètes (#1412)
- Mise à jour de la logique de visibilité des objectifs territorialisés pour les membres DGALN (#1418)
- Ajout de cartes de territorialisation au module de graphiques (#1404)
- Ajout de la gestion des documents de territorialisation pour améliorer l'affichage des objectifs.
- Amélioration de l'affichage des objectifs dans TerritorialisationHierarchy et Trajectoires.
- Ajout d'un fichier de fixture pour les objectifs de territorialisation.
- Mise à jour du texte et du lien sur la page Friches (#1410).

### Évolutions techniques
- Refactoring du composant Trajectoires pour ajuster la logique `objectifType` et intégrer l'authentification utilisateur dans la vue du graphique.
- Ajout d'un DAG Airflow pour ingérer les données de `brevo_user_organism` et création des fichiers SQL associés.
- Amélioration de la récupération des objectifs de territorialisation en utilisant des filtres explicites.
- Ajout de champs 'to_field' et 'null' pour les clés étrangères dans la migration de TerritorialisationObjectif.
- Suppression de la création conditionnelle de la table LandModel et simplification de la migration.
- Ajout d'un champ clé unique au modèle LandModel et mise à jour des relations dans TerritorialisationObjectif.
- Mise à jour de la version de la stack dans le fichier `scalingo.json`.
- Amélioration des tests d'inscription en utilisant le contexte du formulaire pour les erreurs.
- Suppression des importations redondantes dans le fichier `urls.py`.
- Ajout d'un nouvel icône de badge pour le composant Card et amélioration du style des cartes dans TerritorialisationHierarchy.
- Ajout d'un endpoint API pour récupérer l'utilisateur courant et son type.
- Suppression des fichiers SQL et YAML pour les territoires similaires.
- Suppression de la tâche de copie des données des territoires similaires dans `update_app.py`.
- Ajout de la gestion des terres personnalisées et intégration des données.
- Ajout de calculs et projections statistiques des terres.
- Ajout d'un élément parent fictif pour la loi climat et amélioration de l'affichage des objectifs dans TerritorialisationHierarchy.
- Suppression de la validation d'objectif identique à l'objectif de référence dans le modal.

### Autres changements
- Correction du chemin d'accès de l'image du logo dans le fichier `header.html`.
- Activation du débogage de la barre d'outils en retournant `True` dans la fonction `show_toolbar`.
- Suppression de la colonne `look_a_like` des modèles `project.sql` et `project.yml`.
- Suppression d'une ligne vide inutile dans le composant `ConsoCorrectionStatus`.
- Suppression de code Maplibre obsolète.
- Suppression de templates inutilisés.
- Suppression du composant `PopulationDensityChart` non utilisé.
- Tracking des clics sur les liens sortants via Matomo (#1415).
- Ajout de support pour les valeurs négatives dans les objectifs de territorialisation.
- Suppression de références à l'année 2023 dans le rapport local.
