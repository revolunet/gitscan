## Changelog : mission-transition-ecologique (derniers 30 jours)

### Résumé
Ce mois-ci, l'application a bénéficié d'une série de mises à jour et de corrections visant à améliorer l'expérience utilisateur et la qualité des données. Les principales améliorations concernent la gestion des programmes et des projets, la correction de bugs liés à l'affichage des informations et l'amélioration de la robustesse de l'application. Une nouvelle version "Agir" a également été publiée.

### Évolutions fonctionnelles
- Amélioration de l'URL des aides (#2373)
- Correction de l'affichage des titres sur la page des projets (#2441)
- Correction de l'affichage des informations SIRET et associées dans les résultats du formulaire (correction d'un test E2E) (#2415)
- Correction d'un bug concernant la vérification de la valeur du thème pour la limite de projets sur la page d'accueil (#2478)
- Correction de l'affichage des pages de détails des programmes archivés (#2467)
- Publication de la version "Agir" (#2418)
- Correction d'un bug dans l'API des statistiques (#2413)
- Mise à jour de la structure et du lien externe de la carte "À propos" (#2440)

### Évolutions techniques
- Mise à jour de la dépendance `vue-dsfr` (#2402)
- Correction de la gestion des valeurs nulles provenant des données PostHog dans la fonction `generate_company_id` (#2469)
- Suppression de la logique de récupération des projets, jugée inutile (#2340)
- Correction d'un problème lié à l'utilisation de `_` dans ESLint (#2370)

### Autres changements
- Mises à jour régulières des données des programmes et des projets (plusieurs PRs : #2475, #2472, #2471, #2465, #2449, #2443, #2436, #2410, #2407, #2404, #2388)
- Mise à jour des données des témoignages (#2376)
- Mise à jour des données de la FAQ (#2222)
- Mise à jour des données statiques (#2466)
