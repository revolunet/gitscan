## Changelog : crossplane-function-js (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations apportées au projet crossplane-function-js au cours des 30 derniers jours. Les modifications incluent des corrections de bugs, des améliorations de la journalisation, l'ajout de contexte aux requêtes et des mises à jour de sécurité, visant à rendre l'exécution de code JavaScript/TypeScript dans Crossplane plus fiable et plus facile à déboguer.

### Évolutions fonctionnelles
- Ajout du contexte à la requête, permettant aux fonctions d'accéder à plus d'informations. (#48, 752243d)
- Amélioration de la gestion des références de ressources namespace. (fd26e68)
- Prise en charge des conteneurs non définis dans FieldRef. (40f2a16)
- Ajout d'utilitaires pour la gestion des claims. (58e05bb)

### Évolutions techniques
- Mise à jour de Yarn et amélioration de la configuration de sécurité. (#48, 18d4dbd)
- Correction d'un problème lié à l'utilisation de `extraResources` et passage à une approche plus moderne. (bc29f37)
- Amélioration de la journalisation pour faciliter le débogage des fonctions JavaScript. (a170653, d1c745a, 66cb70a, 58e097a)
- Correction de bugs et amélioration de la gestion des ressources observées. (8273b69)
- Correction de bugs liés au linter. (a8d3bca, 8da5e1d, 5c428c8, 1fdbf78, 230025b, 8e6d202)

### Autres changements
- Ajout de logs pour faciliter le débogage de Crossplane. (e9eadf2)
- Corrections de typos et mises à jour de la configuration npm. (a53cb4d, cfe9642, 00302de, 9978eca)
- Publication de plusieurs versions (0.0.40 à 0.0.58) avec des corrections mineures et des améliorations continues.
