## Changelog : acces-cible (derniers 30 jours)

### Résumé
Les dernières mises à jour d'acces-cible se concentrent sur l'amélioration de la détection des liens internes, la refactorisation du code pour une meilleure lisibilité et maintenabilité, ainsi que des corrections de bugs pour assurer un fonctionnement plus fiable de l'application. Des améliorations ont également été apportées à l'extraction des informations relatives aux schémas et plans d'accessibilité.

### Évolutions fonctionnelles
- Correction de plusieurs problèmes (#424) améliorant la stabilité et la fiabilité de l'application.
- Amélioration de la détection des liens internes pour une analyse plus précise de l'accessibilité des sites web.
- L'application recherche désormais l'accessibilité à partir de l'URL de la page d'accueil.
- Amélioration de la regex d'extraction des auditeurs pour une identification plus précise.

### Évolutions techniques
- Refactorisation du `Crawler` et du `FindAccessibilityPageService` pour une meilleure organisation du code.
- Refactorisation de la logique d'extraction des années et de validation des schémas et plans d'accessibilité.
- Renommage de la colonne `checked_at` en `completed_at` dans toute l'application.
- Suppression de la gem `human` et utilisation de la fonctionnalité I18n native de Rails.
- Mise à jour de l'action `actions/checkout` de la version 5 à la version 6.

### Autres changements
- Mise à jour de plusieurs dépendances (minor group) via Dependabot.
- Ajout de tests pour l'extraction des années des schémas et plans d'accessibilité.
