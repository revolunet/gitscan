## Changelog : trackdechets-vigiedechets (derniers 30 jours)

### Résumé
Les dernières mises à jour de Vigiedéchets se concentrent sur l'amélioration de la gestion des entreprises inactives, l'enrichissement des fiches d'inspection avec des informations sur les éco-organismes partenaires, et des corrections pour assurer la stabilité et la précision des données affichées. Des améliorations ont également été apportées à la configuration des workers Celery et aux tests unitaires.

### Évolutions fonctionnelles
- Ajout de l'affichage des partenaires éco-organismes sur les fiches d'inspection et les rapports PDF (#430).
- Ajout d'un champ "est inactif" pour les entreprises dans le modèle CartoCompany, visible dans l'interface utilisateur (#402, #410).
- Modification de l'ordre des sections dans les fiches d'inspection pour placer la section ICPE avant les données des bordereaux (#426).
- Mise à jour du texte d'un message concernant les partenaires éco-organismes pour une meilleure clarté (#434).
- Mise à jour des statistiques cartographiques pour inclure l'année 2026 (#433).
- Correction de l'affichage des installations dormantes dans les popups (#411).
- Correction de la date de fin pour la période "cette année" dans les sélections de dates (#403).
- Mise à jour du texte d'en-tête pour les tableaux de collections de particuliers (#407).

### Évolutions techniques
- Ajout de paramètres de configuration supplémentaires pour les workers Celery afin d'optimiser leur fonctionnement (#424).
- Correction d'un problème de concurrence des workers Celery en ajoutant des limites de concurrence pour éviter l'épuisement des threads (revert d'une modification précédente puis réimplémentation avec des limites) (#420, #401).
- Dépendance Kaleido rétrogradée à la version 0.2.1 pour corriger des problèmes de compatibilité (#420).
- Mise à jour du buildpack Heroku pour utiliser la version 22 (#410).
- Correction d'une requête SQL pour utiliser le nom de table actuel dans le schéma (#402).
- Ajout de filtres de date pour le traitement des données ICPE (#404).

### Autres changements
- Ajout de tests unitaires pour les processeurs HTML et Plotly (#405, #406).
- Ajout de champs manquants pour les détails des exploitants et des émetteurs dans le schéma d'extraction de données (#409).
- Intégration de la documentation d'utilisation (#385).
