## Changelog : pitchou (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à Pitchou au cours des 30 derniers jours. Les principales évolutions concernent l'ajout de nouvelles fonctionnalités pour le suivi des dossiers et des dérogations, notamment l'intégration de l'API GeoMCE, l'amélioration de la gestion des avis d'expert, et le début d'un suivi des événements utilisateurs pour l'analyse des usages. Des corrections de bugs et des améliorations techniques ont également été réalisées.

### Évolutions fonctionnelles

- Intégration de l'API GeoMCE pour améliorer la gestion des données géographiques. (#484)
- Correction d'un bug empêchant l'édition des commentaires dans la section "Mes dossiers". (#489)
- Affichage des acquis sur la page AARRI pour un meilleur suivi de l'avancement des dossiers. (#487)
- Possibilité de modifier les avis d'expert directement dans l'onglet "Avis". (#431)
- Ajout de la possibilité de renseigner que des mesures ER sont suffisantes, sans nécessiter de dérogation. (#470)
- Finition de la page "Tous les dossiers" et création de la page "Mes dossiers" pour une meilleure organisation. (#451)
- Affichage des fichiers des pétitionnaires pour faciliter l'accès aux documents. (#449)
- Renommage des variables "demarches simplifiées" en "démarche numérique" pour plus de clarté. (#442)
- Création d'une page AARRI permettant de suivre l'avancement des dossiers en temps réel. (#452)

### Évolutions techniques

- Résolution d'un problème de dépréciation lié à l'import par défaut de `svelte-preprocess`. (#469)
- Ajout de `pnpm` comme gestionnaire de paquets pour améliorer la gestion des dépendances. (#461)
- Utilisation de `pnpm` pour lancer le serveur en production. (#460)
- Restauration de l'exécution des tests end-to-end pour garantir la qualité du code. (#468)
- Mise à jour de la version de `pnpm` de 10.25.0 à 10.27.0. (#464)
- Passage explicite à la version 1.5 de `svelte-check-action` pour plus de stabilité. (#467)
- Ajout d'un index sur l'événement pour optimiser les performances. (#460)
- Ajout d'une politique de confidentialité. (#466)

### Autres changements

- Ajout d'événements pour le suivi des actions utilisateurs (recherche de dossiers, connexion, etc.) dans le but d'améliorer l'analyse des usages. (#472, #482, #471, #476, #458)
- Correction d'une typo. (#475)
- Initialisation du texte de l'autocomplete pour une meilleure expérience utilisateur. (#455)
- Ajout de liens vers les nouvelles pages de listage des dossiers. (#481)
- Correction d'un bug lié à la réversion d'une requête pour récupérer les actifs.
- Migrations en production. (#462)
