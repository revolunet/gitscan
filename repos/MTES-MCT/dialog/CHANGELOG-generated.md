## Changelog : dialog (derniers 30 jours)

### Résumé
Les dernières mises à jour de dialog se concentrent sur l'amélioration de l'import de données cartographiques (BDTOPO), l'intégration de nouvelles sources de données (Sogelink), l'export de données utilisateurs et arrêtés, ainsi que des corrections de bugs et des améliorations de la configuration et de la CI/CD. Plusieurs améliorations ont également été apportées à l'expérience utilisateur, notamment concernant les invitations et la publication d'arrêtés.

### Évolutions fonctionnelles
- Intégration des liens Sogelink en tant que ressource (#1642)
- Amélioration de la récupération des dernières versions de la BDTOPO (#1643)
- Script d'import automatique de la BDTOPO (#1639)
- Export du nombre d'arrêtés créés par utilisateur vers Grist (#1636)
- Ajout d'un bouton d'export CSV de la base utilisateur (#1612)
- Correction de l'export de documents en mode non connecté (#1609)
- Ajout d'une route API pour supprimer un arrêté (#1607)
- Amélioration du système de redirection après acceptation d'invitation (#1604)
- Publication d'un arrêté en utilisant son identifiant via l'API (#1600)
- Mise à jour de la page d'accueil (#1585)
- Amélioration du processus d'invitation des utilisateurs (#1578)

### Évolutions techniques
- Suppression des références à l'ancienne version de la BDTOPO (2023) (#1635)
- Mise à jour de Node.js vers la dernière version LTS (24) (#1602)
- Amélioration de la configuration de Monolog en production (#1640)
- Correction de la CI suite à la mise à jour de la BDTOPO Express (#1617)
- Correction d'un bug dans l'API data.geopf (#1603)
- Suppression de pg-admin de la configuration Docker Compose (#1630)
- Renommage des actions des boutons d'administration pour une meilleure clarté (#1626)
- Synchronisation des utilisateurs et organisations vers Grist (#1625)
- Correction du format d'export CSV pour Windows (#1627)

### Autres changements
- Ajout d'un utilisateur de développement (Antoine Smagghe) (#1613)
- Mise à jour de la configuration des logs (#1614)
- Suppression d'un fichier inutile (#1599)
- Signalement d'adresse transmise à l'IGN (#1555)
- Modifications des marges sur la page d'accueil (#1593)
