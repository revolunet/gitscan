## Changelog : aides-agri (derniers 30 jours)

### Résumé
Ce mois-ci, les évolutions se concentrent sur l'amélioration de la stabilité et de la correction de bugs, notamment concernant le filtrage des aides et l'export CSV. Des améliorations ont également été apportées pour gérer une situation d'urgence (crise DNC) avec l'ajout d'une page statique dédiée. Enfin, plusieurs dépendances ont été mises à jour pour bénéficier des dernières corrections et fonctionnalités.

### Évolutions fonctionnelles
- Correction d'un bug sur le filtrage des aides par regroupements (#318, #319, #324, #327).
- Adaptation de l'export CSV pour le mode minimal (#341).
- Ajout d'une page statique d'urgence pour la crise DNC (#332).
- Intégration d'une version minimale d'aides (#331).
- Amélioration du CSS pour les liens sur la page des résultats (#333).
- Correction mineure sur la page de résultats (#353).

### Évolutions techniques
- Relance des tests E2E dans la CI pour garantir la qualité du code (#350).
- Relance des mises à jour automatiques Javascript (#345).
- Consolidation du mode minimal pour une meilleure gestion des fonctionnalités (#337).
- Mise à jour de plusieurs dépendances :
    - `sentry-sdk` (v2.48.0 -> v2.51.0) (#336, #352)
    - `gunicorn` (v23.0.0 -> v24.1.1) (#346)
    - `cypress` (v15.7.0 -> v15.9.0) (#349)
    - `esbuild` (v0.27.0 -> v0.27.2) (#347)
    - `coverage` (v7.13.1 -> v7.13.2) (#344)
    - `ruff` (v0.14.10 -> v0.14.14) (#325, #334, #343)
    - `django-otp` (v1.6.3 -> v1.7.0) (#323)
    - `urllib3` (v2.6.2 -> v2.6.3) (#322)
    - `django-tasks` (v0.10.0 -> v0.11.0) (#328)
    - `faker` (v40.1.0 -> v40.1.2) (#329)
    - `packaging` (v25.0 -> v26.0) (#340)
    - `markdown` (v3.10 -> v3.10.1) (#339)
    - `django-stubs` (v5.2.8 -> v5.2.9) (#338)
    - `django` (v5.2.9 -> v5.2.10) (#317)

### Autres changements
- Mise à jour du nom du ministère (correction tardive) (#330).
- Ajout d'un popup d'avertissement pour tous les sites sauf la production (#351).
- Page d'ensemble d'aides implémentée (#284).
