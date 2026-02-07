## Changelog : BlockNote (derniers 30 jours)

### Résumé
Les dernières mises à jour de BlockNote incluent des corrections de bugs améliorant la stabilité et l'expérience utilisateur, notamment concernant les tableaux, l'IA, la gestion des liens et des listes de contrôle. Des améliorations ont également été apportées à l'export HTML et à la gestion des options d'interface utilisateur. Enfin, la documentation du site web a été mise à jour et nettoyée.

### Évolutions fonctionnelles
- Correction d'un crash lié aux poignées de manipulation des tableaux (#2384).
- Réactivation du basculement du menu IA lorsque l'espace est insuffisant (#2247).
- Correction de l'affichage des caractères gras et italiques dans certaines polices (#2354).
- Correction du bouton d'authentification (#2381).
- Amélioration de la compatibilité avec les IME lors de l'édition de liens (#2361).
- Désactivation du sélecteur de langage des blocs de code lorsque l'éditeur n'est pas modifiable (#2351).
- Correction d'une incohérence visuelle entre l'éditeur en direct et le HTML exporté (#2348).
- Amélioration de la gestion des indentations avec une fusion plus profonde des options d'interface utilisateur (#2310).
- Correction du comportement de la touche flèche haut sur les éléments de liste de contrôle (#2306).

### Évolutions techniques
- Migration vers la version 6 du SDK IA (#2328).
- Correction d'une condition de course dans `getPos` en mode React StrictMode (#2311).
- Refactorisation de la gestion des extensions pour permettre le regroupement (#2284 - référencé dans le changelog précédent).
- Mise à jour de la librairie `react-email` (#2380).
- Correction d'une fuite de mémoire liée à l'écouteur d'événements de la barre d'outils de lien (#2335).
- Suppression d'une dépendance Zod inutilisée dans le package Shadcn (#2334).

### Autres changements
- Mise à jour et nettoyage de la documentation du site web (#2371).
- Correction de problèmes de style mineurs (#2354, #2319, #0849b77).
- Mises à jour de dépendances (plusieurs commits dependabot - #2337, #2314).
