## Changelog : diagbruit.beta.gouv.fr (derniers 30 jours)

### Résumé
Les dernières mises à jour de diagbruit.beta.gouv.fr se concentrent sur la correction de bugs et l'amélioration de la stabilité de l'application. Des ajustements ont été apportés à l'API et à l'interface utilisateur, notamment pour l'intégration de données cartographiques et le traitement des requêtes initiales. Une nouvelle fonctionnalité d'intégration avec Tally a été ajoutée pour faciliter la collecte de feedback.

### Évolutions fonctionnelles
- Intégration d'un formulaire Tally directement dans l'application pour recueillir des retours utilisateurs (#48dd69d).
- Correction de l'affichage des données cartographiques IGN qui ne disposaient plus de la boîte englobante nécessaire (#f660e47).
- Correction de l'équivalence des environnements sonores 75dB (#5af000e).
- Implémentation d'une méthode pour autoriser l'utilisation de codes INSEE spécifiques, avec une initialisation pour les départements 33 et 44 (#2cbb51b, #51c4533).

### Évolutions techniques
- Correction d'un problème de pool de connexions à la base de données lors des premières requêtes (#00f72e6).
- Ajout d'un buffer à la géométrie avant les calculs de correction dans l'API FastAPI (#c4aab2d).
- Correction des tests d'intégration suite à la nouvelle isolation du buffer (#1e551a6).
- Suppression des emojis de l'intégration Tally (#12fae78).

### Autres changements
- Déploiements forcés du frontend et de l'API pour assurer la mise en production des correctifs (#2d58e1e, #aec7bc7).
