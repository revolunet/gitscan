## Changelog : Resultats-Elections-FPT (derniers 30 jours)

### Résumé
Ce projet a connu une évolution significative au cours des dernières semaines, avec une refonte technique majeure vers l'utilisation de Vue.js et des composants DSFR. De nouvelles fonctionnalités ont été ajoutées, notamment une vue tableau pour l'affichage des résultats et une vue pour la cartographie des collectivités. L'automatisation du processus de build a également été améliorée grâce à l'intégration d'une CI.

### Évolutions fonctionnelles
- Ajout d'une nouvelle vue pour la cartographie des collectivités (#24).
- Implémentation d'une première version de la vue tableau utilisant les composants DSFR pour l'affichage des résultats (#16).
- Ajout d'un bouton de téléchargement optionnel sur la vue fiche (#18).
- Diverses améliorations apportées à la vue tableau suite au recettage (#19).
- Correction des URLs générées lors du build pour utiliser des chemins relatifs (#17).

### Évolutions techniques
- Migration vers Vue.js pour remplacer les widgets HTML personnalisés (#15).
- Mise en place d'une CI (Continuous Integration) pour automatiser le build de l'application (#20).
- Amélioration de l'action de build pour mettre à jour le dossier `dist` (#22).
- Création d'un build "staging" pour faciliter le recettage (#25).

### Autres changements
- Mise à jour du fichier Changelog (#21).
- Ajout d'un trigger de page (#29).
