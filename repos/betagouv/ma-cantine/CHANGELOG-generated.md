## Changelog : ma-cantine (derniers 30 jours)

### Résumé
Les dernières mises à jour de ma-cantine se concentrent sur l'amélioration de l'expérience utilisateur, notamment dans les fonctionnalités d'import de données et de télédéclaration. Des corrections de bugs et des améliorations techniques ont également été apportées pour optimiser les performances et la fiabilité de la plateforme. De nouvelles ressources et supports ont été ajoutés pour aider les utilisateurs.

### Évolutions fonctionnelles
- Ajout d'une règle métier sur le ministère de tutelle lors de la création de cantines.
- Possibilité d'importer des achats via le numéro ID de la cantine.
- Mise à jour des ressources et du kit du télédéclarant.
- Ajout de supports de webinaire sur les cuisines centrales et satellites.
- Mise à jour de la convention de délégation.
- Ajout d'un bandeau d'alerte pour le rappel des laits infantiles.
- Amélioration de la page "Gérer mes satellites" avec une barre de recherche et un affichage plus clair.
- Ajout d'une page de création de groupe avec des informations statiques.
- Affichage des informations du nouveau type de groupe dans le tableau de bord.
- Suppression du champ déclaratif "satellite_canteens_count".
- Ajout d'un lien vers l'article "Bien calculer son nombre de couverts".
- Amélioration des messages d'erreur lors de l'import de fichiers.
- Correction de l'affichage du logo sur les pages mobiles de l'ancien frontend.
- Suppression du lien "Contactez-nous" sur la page cantine.

### Évolutions techniques
- Simplification des exports secteur et catégorie pour l'ETL.
- Refactor de la gestion des données géographiques pour une récupération en temps réel.
- Amélioration de la gestion des champs géo dans l'administration des cantines.
- Utilisation de django-dirtyfields pour suivre les modifications des champs.
- Amélioration des tests pour les API de modification des cantines.
- Refactor de la gestion des exports Open Data et Metabase pour les télédéclarations.
- Optimisation des requêtes API pour les achats.
- Amélioration de la gestion des erreurs dans l'API.
- Refactor de l'architecture des imports pour supprimer le code dupliqué.
- Mise à jour de l'infrastructure avec les releases 2026.10.0, 2026.9.0, 2026.8.0, 2026.7.0, 2026.6.0, 2026.5.0, 2026.4.0, 2026.3.0, 2026.2.0, 2026.1.0 et 2026.0.3.
- Amélioration des mocks pour les tests des données géo.
- Ajout d'une propriété pour détecter les cantines avec des données géo manquantes.
- Amélioration de la gestion des snapshots pour les cantines et satellites.

### Autres changements
- Amélioration de la documentation et des ressources disponibles pour les utilisateurs.
- Correction de divers bugs et améliorations mineures de l'interface utilisateur.
- Mise à jour des dépendances.
- Nettoyage du code et refactoring de certaines parties de l'application.
