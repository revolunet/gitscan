## Changelog : euphrosyne-digilab (derniers 30 jours)

### Résumé
Ce changelog fait état d'une période d'amélioration continue de la plateforme Euphrosyne Digilab. Les modifications concernent principalement des mises à jour de dépendances, des corrections de problèmes de construction et des optimisations du processus de CI/CD. Ces améliorations visent à garantir la stabilité, la sécurité et la performance de la plateforme.

### Évolutions fonctionnelles
Aucune évolution fonctionnelle majeure n'a été déployée durant cette période.

### Évolutions techniques
- Mise à jour de Next.js de la version 15.5.7 à la version 15.5.9 (#276)
- Mise à jour de @sentry/nextjs de la version 10.22.0 à la version 10.27.0 (#275)
- Mise à jour de react-dom et @types/react-dom (#280)
- Mise à jour de sass de la version 1.86.3 à la version 1.97.1 (#281)
- Mise à jour de js-yaml de la version 4.1.0 à la version 4.1.1 (#269)
- Amélioration du workflow CI/CD avec la modernisation de setup-node et une meilleure fiabilité (#274)
- Correction d'un problème de taille de build trop importante en excluant les artefacts et caches de construction avec un fichier `.slugignore` (#278)
- Correction d'un problème lié aux permissions dans le workflow CI (#279)
- Mise à jour des icônes React DSFR (#277)

### Autres changements
- Correction d'un problème potentiel lié à une alerte de code scanning (#280)
- Suppression d'une propriété de cooldown inutile dans la configuration de Dependabot (#279)
