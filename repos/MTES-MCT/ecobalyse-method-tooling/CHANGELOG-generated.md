## Changelog : ecobalyse-method-tooling (derniers 30 jours)

### Résumé
Les dernières mises à jour se concentrent sur l'amélioration de la qualité et de la précision des données, notamment lors de la fusion et de la classification des ingrédients. Des améliorations ont également été apportées aux workflows d'exportation et à la documentation, facilitant ainsi l'utilisation et la compréhension des outils.

### Évolutions fonctionnelles
- Amélioration de la prédiction du `foodType` grâce à des corrections de traduction et des améliorations de la base de données FoodOn. (#c89caa8)
- Ajout d'une hiérarchie FoodOn pour la détection de poissons et de viandes. (#e6a5a94)
- Amélioration de la correspondance sémantique et de la gestion du pluriel dans la prédiction des ingrédients. (#14085d2)
- Correction de bugs de mauvaise classification du `foodType`. (#28ab965)
- Ajout d'un workflow d'exportation en plusieurs étapes avec des UUID déterministes. (#049e71d)
- Clarification de la commande par défaut de `export.py` dans le README. (#c73aa4d)
- Documentation ajoutée concernant l'inférence basée sur les motifs `cropGroup`. (#489b419)

### Évolutions techniques
- Refactorisation de la fusion des activités avec des dictionnaires plats et des clés de fusion basées sur UUID. (#b8f6acd)
- Remplacement des variables d'environnement individuelles par des chemins de base `ECOBALYSE_DATA` et `ECOBALYSE`. (#c70285e)
- Consolidation des activités par `activityName` lors de la fusion. (#ff61dfc)
- Correction de la logique de fusion pour utiliser `displayName` au lieu de `activityName`. (#a1560d9)
- Amélioration de la logique de fusion à deux niveaux, préservant les UUID. (#ad01571)
- Unification du format `Match` et correction de la précision de la correspondance. (#f135799, #d393d7e)
- Suppression des valeurs prédites des données d'entraînement. (#7870e33)

### Autres changements
- Déduplication des ingrédients par `displayName` entre les fichiers lors de la fusion. (#b88dfe2)
- Renommage des options `--add-old-prefix` et `--remove-old-prefix` en `--add-2025-suffix` et `--remove-2025-suffix`. (#7936b15)
- Modification du suffixe "(old)" en "(2025)" pour la gestion des versions de `displayName`. (#06d8707)
- Suppression du suffixe "(old)" pour les ingrédients listés dans `keep.csv`. (#ab7eba2)
- Gestion de la production DOM avec le suffixe "FR Outre-Mer". (#057fedd)
- Ajout d'un nouveau préfixe aux alias lors de l'utilisation de `--add-old-prefix`. (#f4ba978)
- Mise à jour des données sources et des données générées. (#4c14d31, #97646d2, #03b17ba)
- Réduction du fichier `cropgroup.csv` avec l'inférence basée sur les motifs `cropGroup`. (#11424b5)
- Ajout de documentation de modélisation pour le micronized sulfur Suspension Concentrate et le micronized fulfur SC. (#373a182, #c393a83)
