## Changelog : mon-entreprise (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à mon-entreprise au cours du dernier mois. Les modifications incluent des corrections de bugs, des mises à jour de données (taux de cotisations, plafonds, etc.), des améliorations de l'accessibilité, et des évolutions importantes sur le simulateur d'économie collaborative, avec l'ajout de nouvelles fonctionnalités et une refonte de l'expérience utilisateur.

### Évolutions fonctionnelles

*   **Économie collaborative :** Refonte complète du simulateur avec l'ajout de la prise en compte de différents régimes, des conditions d'applicabilité, et une meilleure présentation des résultats.
*   **Cessation d'activité :** Précision sur la définition de la rémunération incluant les cotisations.
*   **Impôt :** La notification de domiciliation fiscale à l'étranger n'est désormais affichée que pour les salariés.
*   **Salarié :** Correction de l'exonération des frais de transport et réactivation de la règle emploi franc éligible.
*   **Auto-entrepreneur :** Mise à jour des taux de cotisation BNC Cipav Drom et des taux de cotisation et de répartition.
*   **Location meublée :** Ajout du simulateur de location meublée dans la liste des simulateurs et amélioration de l'affichage.

### Évolutions techniques

*   **Accessibilité (a11y) :** Améliorations de l'accessibilité pour les lecteurs d'écran, notamment dans les formulaires et les champs.
*   **Design System :** Ajout de nouveaux composants (ConteneurBle, StatusCard) et améliorations de composants existants.
*   **Tests :** Simplification des tests et suppression des tests e2e de la CI de PR.
*   **Sentry :** Remplacement de `console.error` par `Sentry.captureException` pour une meilleure gestion des erreurs. Correction d'une erreur Sentry liée à `requestIdleCallback`.
*   **Refactoring :** Plusieurs refactorings ont été effectués pour améliorer la qualité du code et la maintenabilité, notamment dans les simulateurs d'économie collaborative et de cessation d'activité.
*   **Worker :** Optimisation de l'initialisation du worker de SelectTauxRisque.

### Autres changements

*   **Documentation :** Mise à jour de la documentation et du changelog.
*   **Données :** Mise à jour des taux de cotisations, des plafonds et des références légales (Smic, Pass, etc.) pour les différents régimes (salarié, auto-entrepreneur, etc.).
*   **Traduction :** Ajout et mise à jour des traductions pour les nouveaux composants et fonctionnalités.
*   **Linting :** Corrections de problèmes ESLint et Prettier.
*   **Suppression :** Suppression de l'assistant charges sociales déductibles et de l'assistant PAM.
