## Changelog : code-du-travail-numerique (derniers 30 jours)

### Résumé
Ce mois-ci, le projet a connu des améliorations significatives en termes d'accessibilité, de performance et de fonctionnalités. Des optimisations ont été apportées à la recherche, aux outils et à la page d'accueil. L'ajout de données structurées JSON-LD améliore la visibilité du site auprès des moteurs de recherche. De plus, une nouvelle page "Quoi de Neuf ?" a été implémentée pour faciliter la communication des mises à jour aux utilisateurs.

### Évolutions fonctionnelles
- La recherche utilise désormais par défaut la nouvelle version (v2) et bénéficie d'améliorations en matière d'accessibilité (#7077).
- La page d'accueil a été améliorée (#7050).
- Les outils ont été simplifiés avec la suppression des questions sans issue (#7079).
- Une nouvelle page "Quoi de Neuf ?" permet aux administrateurs de publier des mises à jour (#7048).
- Ajout d'un message dans Mattermost après chaque publication (#7080).
- Le layout des modèles de courrier a été mis à jour (#7072).
- Ajout du `naf` et des redirections `idcc` dans le package partagé (#7075).
- Ajout du contenu de décembre 2025 à la page "Quoi de Neuf ?" (#7052).

### Évolutions techniques
- Ajout du support JSON-LD pour `GovernmentOrganization`, `Website`, `Breadcrumbs` et `Legislation` pour améliorer le référencement (#7071).
- Mise en place d'un audit Lighthouse avec des URLs configurables et un CI manuel pour l'exécution (#7074).
- Correction d'une erreur empêchant Next.js de fonctionner correctement en version 16.1 (#7064).
- Mise à jour de React de `peerDep` à `devDep` (revert d'une modification précédente) (#7060).
- Ajout des domaines nécessaires pour l'ouverture de liens externes dans l'outil brut/net pour résoudre un problème de CSP (#7070).

### Autres changements
- Correction de liens morts (#7067).
- Amélioration de l'accessibilité suite à des retours utilisateurs (#7055).
- Correction de la déclaration d'accessibilité suite à des modifications éditoriales (#7068).
- Corrections sur les tests e2e de service public et indemnité licenciement (#7053).
- Modification du wording sur les outils externes (#7054).
- Fermeture de la popup de recherche lors du changement de lien (#7083).
