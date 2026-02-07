## Changelog : OpenGateLLM (derniers 30 jours)

### Résumé
Les dernières mises à jour d'OpenGateLLM se concentrent sur l'amélioration de la gestion des données, la correction de bugs dans l'interface utilisateur et l'optimisation des fonctionnalités existantes. Des améliorations ont également été apportées à la documentation et à l'infrastructure du projet, notamment pour faciliter la contribution et le déploiement.

### Évolutions fonctionnelles
- Correction d'un bug concernant le format de la date d'expiration des utilisateurs lors de la création (#663).
- Amélioration du tri et des filtres sur les pages "router" et "provider" dans le playground (#664).
- Correction d'un bug affectant le format de la requête pour l'intégration Albert (audio) (#665).
- Suppression des rôles et organisations dans le playground (#666).
- Consolidation des index Elasticsearch en un seul index pour une meilleure gestion des données (#667).
- Correction d'une erreur liée à l'absence de TTL pour les clés Redis de limitation de débit (#654).
- Ajout d'un filtre de date de création pour les collections (#631).
- Modification de la signature de l'endpoint v1rerank pour correspondre à la norme Cohere (#611).
- Suppression des références aux moteurs de recherche web Brave et DuckDuckGo (#601).
- Amélioration de la documentation et du quickstart pour une meilleure expérience utilisateur (#605).
- Mise à jour des liens vers la documentation de l'API Reference et de l'API Swagger (#600).

### Évolutions techniques
- Ajout du contenu de la requête au `basemodelprovider` pour une plus grande flexibilité (#640).
- Suppression du préfixe "carbon footprint" dans les paramètres du provider (#603).
- Nettoyage de l'architecture de l'endpoint du modèle (#522).
- Ajout d'un template de PR sur Github pour faciliter les contributions (#606).
- Documentation sur la gestion des files d'attente (queuing) ajoutée (#536).
- Correction du forwarding de la requête pour l'OCR beta (#613).
- Suppression d'un ancien type d'ID de collection (#662).
- Documentation ADR sur le scaling d'Elasticsearch (#668).

### Autres changements
- Correction d'une faute de frappe dans la documentation du tutoriel OCR (#629).
- Mise à jour du fichier `feature_request.md` (#607).
- Mise à jour des dépendances `qs` et `express` dans la documentation (#610).
- Améliorations mineures du Makefile (#557).
