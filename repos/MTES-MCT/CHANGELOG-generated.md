# Synthèse d'activité : MTES-MCT (derniers 7 jours)

## Résumé de l'activité
L'organisation MTES-MCT a connu une semaine riche en activités, avec des mises à jour significatives sur de nombreux dépôts. Les efforts se sont concentrés sur l'amélioration de la sécurité, la correction de bugs, l'ajout de nouvelles fonctionnalités et l'optimisation des performances. Plusieurs projets ont bénéficié de mises à jour de dépendances pour assurer la stabilité et la sécurité des applications. Des améliorations notables ont été apportées à l'expérience utilisateur sur des plateformes comme `acceslibre`, `dialog`, `dossierfacile-frontend` et `qualicharge`, avec des fonctionnalités de recherche, de gestion des données et d'affichage améliorées. Des projets comme `ecobalyse-data` et `prelevements-deau-api` ont mis l'accent sur l'enrichissement des données et l'amélioration de la robustesse des systèmes.

## Sécurité
Plusieurs dépôts ont bénéficié de mises à jour de sécurité :
- Correction de failles de sécurité dans `vizeau` (CVE-2026-21440 et CVE-2026-22814).
- Mise à jour de dépendances vulnérables dans `mon-devis-sans-oublis-backend-ocr` et `trackdechets`.

## Autres changements notables
- **Refonte et améliorations majeures :** `acceslibre` a migré de `pipenv` vers `uv` pour une meilleure gestion des dépendances Python. `dossierfacile-frontend` a complètement revu la gestion des partages de documents. `ecobalyse-method-tooling` a refactorisé la logique de fusion des activités.
- **Intégrations et nouvelles fonctionnalités :** `dialog` a intégré de nouvelles sources de données (Sogelink, BDTOPO) et amélioré l'accessibilité. `prelevements-deau-api` a ajouté une fonctionnalité d'import de séries temporelles. `trackdechets-vigiedechets` a ajouté des indicateurs pour les stations et amélioré l'affichage des cartes.
- **Améliorations techniques :** `monitor-ui` a corrigé des problèmes liés à l'installation de Cypress dans le pipeline CI/CD. `td-mass-validator` a intégré les modifications de la branche `tra-17569`. `trackdechets-data` a standardisé les noms de colonnes dans les modèles dbt.

## Dépôts les plus actifs
- [acceslibre](/repos/MTES-MCT/acceslibre) : Optimisation des performances, modernisation des outils de développement et amélioration de l'expérience utilisateur.
- [dialog](/repos/MTES-MCT/dialog) : Intégration de nouvelles sources de données et amélioration de l'accessibilité.
- [dossierfacile-frontend](/repos/MTES-MCT/dossierfacile-frontend) : Refonte complète de la gestion des partages de documents.
- [ecobalyse-data](/repos/MTES-MCT/ecobalyse-data) : Ajout de nouvelles données pour différents matériaux.
- [trackdechets-vigiedechets](/repos/MTES-MCT/trackdechets-vigiedechets) : Amélioration de la présentation des données et correction de bugs.
