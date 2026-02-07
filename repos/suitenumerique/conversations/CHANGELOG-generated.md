## Changelog : conversations (derniers 30 jours)

### Résumé
Ce mois-ci, les améliorations se concentrent sur la stabilité, la sécurité et l'expérience utilisateur. Des correctifs ont été apportés pour améliorer les performances de l'interface, la compatibilité avec différents modèles d'IA auto-hébergés, et la gestion des fichiers. De plus, des améliorations ont été apportées à la gestion des conversations, notamment la possibilité de les nommer et de les modifier. Des mises à jour de sécurité ont également été intégrées pour corriger des vulnérabilités.

### Évolutions fonctionnelles
- Possibilité de nommer et d'éditer le titre des conversations (#849).
- Amélioration des performances de l'entrée de chat (#120b204).
- Standardisation de l'affichage lors de l'analyse de fichiers PDF et ajout de la localisation (#f52a27f).
- Les documents PDF sont maintenant considérés comme des types de documents standard (#234).
- Possibilité d'utiliser le stockage S3 sans accès externe (#853305a).

### Évolutions techniques
- Migration du backend vers `uv` pour de meilleures performances (#ab2ad03).
- Correction de problèmes liés aux keep-alives lors de l'analyse de documents (#3e467ca).
- Suppression de code mort et de fichiers inutilisés dans le backend (#daf90cf).
- Correction de la compatibilité du prompt système avec les modèles auto-hébergés (#200).
- Correction de problèmes de streaming des réponses des outils pour éviter les timeouts (#ddfc86a).
- Mises à jour de sécurité pour corriger des CVE dans les dépendances (#09b0038, #0b5317a).

### Autres changements
- Mise à jour de la version Next.js vers 5.3.9 (#7858476).
- Mise à jour de la version Protobuf vers 6.33.5 (#c02254e).
- Mise à jour des chaînes de caractères traduites pour la localisation (#d752334, #e7d76e4).
- Correction de la couleur des liens dans le composant `LeftPanelConversationItem` (#a0b31e1).
- Suppression de la partie "en train de réfléchir" de l'interface utilisateur (#13c6499).
- Désactivation de l'exécution de Trivy sur le yarn.lock de la génération de mails (#fb297b9).
- Publication des versions 0.0.12 et 0.0.11 avec les changements associés (#30f825c, #fd3399d).
