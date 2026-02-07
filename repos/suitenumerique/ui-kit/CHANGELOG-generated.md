## Changelog : ui-kit (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à la bibliothèque de composants ui-kit au cours des 30 derniers jours. Les nouveautés incluent l'ajout d'un menu contextuel accessible, d'un modal d'onboarding multi-étapes, et des améliorations apportées à des composants existants comme le menu déroulant, l'arborescence et le partage de contenu. La documentation a également été enrichie et des attributs de test ont été ajoutés pour faciliter les tests automatisés.

### Évolutions fonctionnelles
- Ajout d'un menu contextuel accessible avec gestion des événements `onFocus` et `onBlur` pour le suivi des interactions (#43f70e6).
- Ajout d'un modal d'onboarding multi-étapes pour guider les nouveaux utilisateurs (#fec5aee).
- Amélioration du menu déroulant avec la possibilité d'ajouter des séparateurs et une variante "danger" (#b571ab0, #4d7165b, #f2dda2c).
- Amélioration du composant TreeView (#dd569de).
- Ajout de la possibilité d'ajouter un sous-texte aux options du menu déroulant (#d7558cb).
- Ajout de nouveaux assets SVG pour les différents états d'un lien (#ee8fc80).
- Amélioration du composant ShareModal avec la prise en charge des props du menu déroulant (#a966bbd).

### Évolutions techniques
- Ajout d'attributs `data-testid` aux composants pour faciliter les tests automatisés (#a06a48d).
- Ajout d'un type `MenuItem` partagé pour les menus contextuels et déroulants afin d'améliorer la cohérence du code (#4a7cb6a).
- Exportation de la police Marianne en CSS (#88c3bd7).
- Ajout d'un accès authentifié aux fichiers de localisation (#4af2171).
- Suppression du répertoire `openspec` du suivi Git pour nettoyer le dépôt (#f794f31).

### Autres changements
- Ajout d'une documentation README complète (#864ee1f).
- Publication d'une nouvelle version du package (#3d8d679, #b58ec26).
- Ajout de spécifications pour le menu contextuel avec le nouveau type `MenuItem` (#02602cc).
