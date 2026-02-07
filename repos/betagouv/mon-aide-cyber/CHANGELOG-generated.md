## Changelog : mon-aide-cyber (derniers 30 jours)

### Résumé
Les dernières mises à jour de MonAideCyber se concentrent sur la sécurité, la correction de bugs et l'amélioration de l'environnement de développement. Des mises à jour de dépendances ont été appliquées pour corriger des vulnérabilités, et des corrections ont été apportées pour assurer le bon fonctionnement du build et des tests en environnement d'intégration continue. Une amélioration de l'expérience utilisateur a également été ajoutée avec un encart de contact en homologation.

### Évolutions fonctionnelles
- Ajout d'un encart de contact en environnement d'homologation pour faciliter la communication concernant les fonctionnalités ou la sécurité de MonAideCyber. (#f1cb1d0)

### Évolutions techniques
- Mise à jour de la dépendance `cros-spawn` pour corriger une alerte de sécurité. (#b40f3a9, dependabot #100)
- Mise à jour de la dépendance `react-router` pour corriger une alerte de sécurité. (#5c0373d, dependabot #103)
- Mise à jour de la dépendance `express` vers la version 5.2 pour bénéficier des dernières corrections et améliorations de sécurité. (#6d1c421)
- Mise à jour de la dépendance `semver` pour corriger une alerte de sécurité. (#20b69e0)
- Migration de l'outil de gestion des paquets de `npm` vers `pnpm` pour améliorer la performance et la gestion des dépendances. (#753e5bd)
- Correction de l'exécution des tests suite à la migration vers `pnpm`. (#d5e5bf3)
- Correction de l'exécution de la CI avec `pnpm`. (#53cd9c3)
- Désactivation de l'exécution des tests Storybook sur la CI pour améliorer la stabilité du pipeline. (#4754e89)
- Correction du build pour Clever Cloud. (#477ff4f)

### Autres changements
- Ajout de logs sur les routes Livestorm pour faciliter le débogage et le suivi. (#d593216)
- Mise à jour de la dépendance `qs` de la version 6.13.0 à la version 6.14.1. (#aff2564)
