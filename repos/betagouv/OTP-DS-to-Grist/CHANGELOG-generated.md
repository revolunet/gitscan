## Changelog : OTP-DS-to-Grist (derniers 30 jours)

### Résumé
Ce mois-ci, les améliorations se concentrent principalement sur l'interface utilisateur et l'expérience de configuration. L'interface de configuration a été remaniée pour une meilleure clarté et facilité d'utilisation, notamment avec l'ajout d'aide contextuelle pour la saisie des tokens API et une gestion améliorée des filtres. Des corrections de bugs et des optimisations ont également été apportées pour améliorer la stabilité et la performance de l'application.

### Évolutions fonctionnelles
- Ajout de liens et de textes d'aide pour faciliter la saisie des tokens API (#177).
- Amélioration de l'interface de configuration avec un résumé visuel des filtres.
- Suppression du bouton de menu mobile et refonte du menu principal (#183).
- Correction d'un bug empêchant la sauvegarde automatique de la configuration.
- Amélioration de l'affichage des logs de synchronisation et ajout de la possibilité de relancer les synchronisations manuellement.
- Ajout d'une indication visuelle lors de la sauvegarde automatique.
- Possibilité de sauvegarder une configuration partielle.

### Évolutions techniques
- Mise à jour de plusieurs dépendances : SQLAlchemy (2.0.45 -> 2.0.46), poethepoet (0.38.0 -> 0.40.0), python-socketio (5.15.0 -> 5.16.0), apscheduler (3.11.1 -> 3.11.2), commitizen (4.11.0 -> 4.12.1), baseline-browser-mapping (2.9.14 -> 2.9.18).
- Correction d'une potentielle vulnérabilité d'exposition d'informations (#166).
- Amélioration des tests et correction d'alertes CI.

### Autres changements
- Nettoyage du CHANGELOG (#188).
- Amélioration de la documentation avec l'ajout de la mention BETA.
- Correction de la typographie et de l'alignement dans la documentation.
- Suppression des ids de groupe dans la configuration des filtres.
