## Changelog : jeveuxaider-back (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées au backend de la plateforme "Je veux aider" au cours des 30 derniers jours. Les mises à jour se concentrent sur l'amélioration des notifications, l'optimisation des requêtes pour le tableau de bord, l'ajout de statistiques spécifiques pour la campagne "Février pour Protéger", et l'amélioration de la pertinence des suggestions de missions.

### Évolutions fonctionnelles
- Amélioration du message de notification pour les missions suggérées et aimées (#121).
- Ajout d'un endpoint pour les statistiques des missions de février dans le cadre de la campagne "Février pour Protéger" (#116).
- Correction de l'affichage de l'image dans la liste des missions similaires (#118).
- Amélioration du filtre des missions ouvertes aux mineurs dans les recommandations (#99ec67b).
- Mise à jour des destinataires des notifications lors des demandes de désinscription d'une structure (#9cacb49, #1dbecaf).
- Modification de la période de rappel pour les notifications de missions récurrentes, passant à deux mois (#285bfc0).

### Évolutions techniques
- Optimisation des requêtes pour le tableau de bord, améliorant la performance pour l'affichage des organisations et missions actives (#dfa3f01).
- Refactorisation de la logique d'exclusion des missions dans le service de recommandation de missions (#077d0c1).
- Amélioration de la logique de notification pour les structures sans missions récentes (#3aef1be).
- Mise à jour de l'endpoint et de la documentation de l'API Adresse (#e2d023a).
- Ajout d'une notification Slack pour les titres suggérés dans le contrôleur MissionSuggestions (#f916512).
- Mise à jour de PHPUnit et des dépendances (#120).
- Suppression du buildpack Datadog (#bf89e54).

### Autres changements
- Commentaire du code lié à l'envoi des URL des missions à l'API Google dans l'observateur Mission (#1b155fa).
- Merge de la branche 'prod' (#bb600cb).
