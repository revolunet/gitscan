## Changelog : lab-anssi-ui-kit (derniers 30 jours)

### Résumé
Cette nouvelle version apporte des améliorations significatives en termes de thèmes et de personnalisation, avec l'introduction de "design tokens" et la prise en charge des couleurs MSC et MSS. De nouveaux composants du DSFR ont également été ajoutés, enrichissant la bibliothèque d'éléments d'interface utilisateur disponibles. Enfin, des corrections et améliorations ont été apportées à certains composants existants.

### Évolutions fonctionnelles
- Ajout du composant `Quote` du DSFR (#d4c291e)
- Ajout du composant `Accordion` du DSFR (#e5552a5)
- Amélioration du composant `DsfrButton` : ajout de la gestion des tailles et amélioration de l'état `disabled` pour la variation `inverted-secondary` (#adb2476, #9a99b19)
- Ajout d'un slot pour le bouton dans le composant `DsfrCallout` (#b4a3359)
- Possibilité de thématiser l'icône 'check' des composants (#1bae165)
- Ajout de points d'entrées vers les WebComponents et des types associés (#21f2d22)

### Évolutions techniques
- Introduction de "Style Dictionary" pour transformer les "design tokens" en variables CSS, facilitant la gestion des thèmes (#8c293b7)
- Ajout des thèmes du LAB sous forme de "design tokens" (#fd5f89f)
- Amélioration de la configuration de Style Dictionary pour gérer les éléments thémables (#0971c05)
- Ajout d'une fonction pour définir un attribut `data-` sur les composants thémables (#892c22b)
- Amélioration de l'usage des thèmes dans Storybook (#d5a8a28)
- Construction et envoi des tokens vers le dossier `/assets` du CDN (#eb1a98b)
- Mise à jour de Storybook vers la version 10.1.11 (#05641e4)

### Autres changements
- Amélioration du contenu du fichier de variables DSFR (#c422334)
- Thématisation des variables DSFR selon les couleurs MSC et MSS (#b70d222, #cb0b633)
- Ajout du thème 'DSFR' au 'switcher' de thèmes Storybook (#a545bc3)
- Passage à la version 1.41.0 (#47e2ffd)
- Passage à la version 1.40.0 (#a1cb2bc)
- Mise à jour des dépendances (#549ccd3)
- Ajout du composant Callout du DSFR (#370f7a3)
