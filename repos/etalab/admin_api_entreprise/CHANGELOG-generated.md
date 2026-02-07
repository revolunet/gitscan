## Changelog : admin_api_entreprise (derniers 30 jours)

### Résumé
Les dernières mises à jour de l'admin API entreprise se concentrent sur l'amélioration de la sécurité, l'ajout de nouvelles fonctionnalités de recherche d'API, et l'intégration de données INSEE plus récentes. Des corrections de bugs et des améliorations de l'interface utilisateur ont également été apportées pour une meilleure expérience administrateur.

### Évolutions fonctionnelles
- Ajout d'une interface pour contourner l'authentification en local pour les environnements de test (#2106, #2105, #2103).
- Implémentation de la réauthentification MFA pour les utilisateurs MonComptePro via ProConnect (#2099).
- Amélioration de la recherche d'endpoints avec la possibilité de rechercher par attributs et de mettre en évidence les résultats (#2082, #2078).
- Ajout de la recherche d'API Particulier (#2080).
- Intégration des fiches métiers INSEE Sirene v4 avec NAF Rév.2025 (#2077).
- Ajout d'un cas d'usage pour le socle de base (#2086, #2076).
- Possibilité de bannir un token d'administrateur avec une date de fin personnalisée (#2085).
- Correction d'une erreur de lien pour la demande d'habilitation socle de base (#2086).

### Évolutions techniques
- Normalisation des adresses email des utilisateurs en minuscules lors de la sauvegarde pour éviter les problèmes de sensibilité à la casse (#2084).
- Renforcement de la sécurité en utilisant le namespace au lieu d'une valeur codée en dur pour les tokens d'administration (#2084).
- Suppression des identifiants Algolia (#2098).
- Mise à jour de la documentation pour inclure les erreurs HTTP 409 Conflict (#2087).
- Mise à jour des fichiers OpenAPI locaux (#2083).
- Correction de la détection de namespace pour les environnements sandbox/staging (#2096).

### Autres changements
- Amélioration des messages d'historique (#2077).
- Suppression d'une mention trompeuse concernant la régénération de token dans le modal de bannissement (#2085).
- Mise à jour des dépendances : faker, rubocop-rspec, action_text-trix (#2101, #2093, #2080).
- Suppression du prochain bureau ouvert (#2089).
- Nettoyage du code et amélioration de la documentation.
