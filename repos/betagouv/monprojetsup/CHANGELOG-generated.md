## Changelog : monprojetsup (derniers 30 jours)

### Résumé
Les dernières semaines ont été marquées par des améliorations significatives du module de suggestions de formations, notamment en intégrant des données plus précises de Parcoursup et en améliorant la gestion des erreurs. Des corrections de sécurité et des améliorations de l'interface utilisateur ont également été apportées. Enfin, des travaux de maintenance et de configuration ont été réalisés pour stabiliser l'infrastructure.

### Évolutions fonctionnelles
- Amélioration du module de suggestions (suggestions2) avec un nouveau score basé sur les données des vœux Parcoursup (#1034).
- Affichage des détails du score Parcoursup dans le README pour une meilleure transparence.
- Gestion plus robuste des données Parcoursup, avec tolérance aux nomenclatures inconnues (#963, #1032).
- Correction d'un bug dans le module de suggestions (suggestions2) concernant la comparaison des statuts des vœux (#1034).
- Correction de l'affichage des vidéos sur la page d'accueil pour les utilisateurs non authentifiés (#16438).
- Suppression du lien vers le logo MPS sur la page d'accueil (#16463).
- Correction d'un bug lié à l'affichage des vœux inconnus dans l'API Parcoursup, qui produisait des erreurs (#1020).
- Ajout d'un message Parcoursup dans la modale (#16432).

### Évolutions techniques
- Refonte des tests ETL pour une meilleure fiabilité et un diagnostic plus précis.
- Mise à jour de plusieurs dépendances : `filelock` (de 3.18.0 à 3.20.3), `torch` (de 2.7.1 à 2.8.0), `org.apache.commons:commons-lang3` (de 3.13.0 à 3.18.0).
- Amélioration des workflows CI/CD pour les branches `demo`, `prod` et `onisep`.
- Correction de problèmes de rebasage sur les branches `demo` et `prod` (#1028, #1029, #1022, #1021).
- Correction de problèmes de syntaxe YAML (#1015).
- Amélioration des diagnostics et de la gestion des erreurs dans le module ETL.

### Autres changements
- Mise à jour de la documentation README.md (#16432, #16438).
- Corrections de linting et de tests (#1027, #1023, #16536).
- Suppression d'un site miroir (#6de4f451).
- Fusion de plusieurs branches de développement (`develop` vers `main`, `feat_#16536_parcoursup_indicator`, `feat_#16438_home_mps`, `feat_#16432_parcoursup_modal`, `fix_#16398_Améliorations_de_sécurité`, `fix_#16463_link_to_logo_mps`, `feat_#16348_Home_MPS_fix`).
