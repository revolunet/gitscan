## Changelog : nosgestesclimat-site-nextjs (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a travaillé sur l'amélioration de l'expérience utilisateur, notamment sur la page d'accueil et les formulaires, ainsi que sur la correction de plusieurs bugs. Des améliorations techniques ont également été apportées pour optimiser les performances et la stabilité du site, avec l'ajout de tests E2E et la mise à jour de plusieurs dépendances. Une nouvelle fonctionnalité majeure, les comptes utilisateurs, a été intégrée.

### Évolutions fonctionnelles
- Ajout de comptes utilisateurs (#1405) permettant une expérience plus personnalisée.
- Amélioration de la page d'accueil avec de nouveaux textes et icônes (#1580, #1577, #1576).
- Correction d'un bug empêchant l'affichage du clavier numérique sur mobile pour les champs de saisie de nombres (#1578).
- Amélioration de la gestion des options "aucun" dans les questionnaires (#1584, #1560).
- Ajout d'une fonctionnalité permettant de décocher des options dans la section "possibilités" (#1588).
- Ajout d'une valeur d'autocomplétion au champ de code de vérification (#1631).
- Correction d'un bug sur la page `/organisation/demander-demo` (#1620).
- Ajout de redirections pour améliorer la navigation (#1603).
- Amélioration du sitemap pour le SEO (#1604).
- Correction d'un problème d'affichage du nombre d'éléments dans les cartes d'actions (#1577).

### Évolutions techniques
- Mise à jour de Next.js et React (#1626).
- Mise à jour de la version du modèle de calcul à 4.8.1 (#1590).
- Ajout de tests E2E pour améliorer la couverture des tests et la stabilité du site (#1556).
- Correction de problèmes de cookies en préproduction (#94c63064, #1611).
- Suppression de `husky` pour simplifier le processus de développement (#1587).
- Refactorisation de la gestion des événements PostHog (#1559).
- Suppression des pages `/simulateur/bilan` de l'indexation pour améliorer les performances (#1582).
- Migration de la simulation actuelle uniquement (#f0602066).
- Correction d'un bug empêchant la récupération des simulations (#1614).
- Correction d'un bug lié à une expression incorrecte (#1617).
- Suppression de services publics du graphique du compte utilisateur (#1609).
- Ajout d'un package pour éviter un avertissement (#1632).
- Correction d'un bug lié à l'image source (#1605).

### Autres changements
- Mise à jour de la déclaration d'accessibilité française avec les résultats de l'audit Access42 (#1564).
- Correction de traductions en anglais (#1592, #1591, #1594).
- Ajout de titres de page manquants (#1610).
- Suppression de fichiers inutiles (#1612).
- Mise à jour de la documentation README avec des informations sur les tests BrowserStack (#1575).
- Correction du nombre de newsletters Logement (#1568).
- Suppression du dossier `.cursor` (#1593).
- Ajout de redirections (#1566).
- Correction de bugs dans les tests E2E (plusieurs commits).
