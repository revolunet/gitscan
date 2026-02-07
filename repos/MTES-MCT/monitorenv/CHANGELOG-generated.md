## Changelog : monitorenv (derniers 30 jours)

### Résumé
Les dernières mises à jour de monitorenv se concentrent sur l'amélioration de la recherche de données (plages, couches), l'optimisation des performances de la base de données pour le traitement des données AIS, et l'amélioration de l'interface utilisateur pour la gestion des zones de vigilance et des rapports. Des corrections de bugs et des améliorations de la robustesse des tests ont également été apportées.

### Évolutions fonctionnelles
- Amélioration de la recherche de plages sans accentuation pour une meilleure pertinence des résultats.
- Ajout de filtres pour les plans de contrôle dans les zones réglementaires (#1234).
- Amélioration de la recherche de couches avec un cache pour accélérer les temps de réponse.
- Possibilité de rechercher des stations et des ressources dans les unités de contrôle.
- Mise à jour du format des coordonnées par défaut pour le système DMD.
- Amélioration de l'affichage des zones réglementaires avec le nom du polygone ou un résumé.
- Ajout du champ "plan de contrôle" aux zones réglementaires.
- Refonte de la liste des zones de vigilance avec des filtres et une meilleure présentation.
- Amélioration de l'édition des périodes de vigilance avec un nouveau format et un indicateur de criticité.
- Correction de l'affichage des AMP (Aires Marines Protégées) dans les résumés.
- Correction de l'affichage des rapports PDF.

### Évolutions techniques
- Utilisation de l'extension `unaccent` de PostgreSQL pour améliorer la recherche sans accentuation.
- Séparation du texte de recherche global de la requête d'entrée.
- Création d'une vue matérialisée pour accélérer la recherche de plages.
- Mise en place d'une file d'attente bloquante pour le traitement par lots des positions AIS.
- Utilisation de TimescaleDB pour optimiser le stockage et la requête des données de position AIS.
- Configuration de l'authentification SSL avec Kafka.
- Ajout d'une commande pour configurer les bibliothèques partagées.
- Modification du type de données de position dans la base de données.

### Autres changements
- Correction de bugs et amélioration de la robustesse des tests.
- Mise à jour des requêtes de hachage des réglementations.
- Correction de la couleur des zones réglementaires.
- Normalisation du chemin d'accès pour éviter les problèmes de superutilisateur.
- Ajout de Mayotte, Martinique et Guadeloupe aux codes de région de l'API Google Places.
- Suppression des logs inutiles des tests Gradle.
- Ajout de logs pour le test back-end.
- Suppression du champ `is_archived` des zones de vigilance.
- Nettoyage du code après revue.
- Correction de l'affichage des périodes multiples dans les rapports.
- Ajout de tests Cypress.
