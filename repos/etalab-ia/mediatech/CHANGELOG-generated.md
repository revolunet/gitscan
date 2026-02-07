## Changelog : mediatech (derniers 30 jours)

### Résumé
Ce projet a connu des améliorations significatives au cours du dernier mois, axées sur l'intégration de nouveaux jeux de données, l'optimisation du traitement des données et l'amélioration de la documentation pour faciliter l'utilisation des fonctionnalités d'IA et de vectorisation. Les modifications apportées visent à rendre les données publiques plus accessibles et plus faciles à exploiter pour les applications d'IA dans le secteur public.

### Évolutions fonctionnelles
- Ajout de la gestion de tous les types de statuts pour les jeux de données DILAS pour l'intégration avec Hugging Face (#81).
- Mise à jour des paramètres de chunking pour les jeux de données Service Public et Travail Emploi (#75).
- Mise à jour des paramètres de chunking pour le jeu de données LEGI (#73).
- Tutoriel ajouté expliquant comment reconstituer le jeu de données original (#538774a).
- Suppression du statut "MODIFIE" pour les jeux de données LEGI et CNIL, simplifiant ainsi la gestion des données.

### Évolutions techniques
- Refactorisation de la connexion PostgreSQL avec l'ajout d'un gestionnaire de contexte pour une meilleure gestion des ressources (#83).
- Augmentation de la limite de récursion pour éviter les erreurs lors du traitement de jeux de données complexes (plusieurs commits : fddd4be, eca2870).
- Initialisation de la propriété `overlap` à 0 pour tous les jeux de données, servant de base pour les futures optimisations (#77).

### Autres changements
- Amélioration de la documentation avec un tutoriel RAG (Retrieval-Augmented Generation) provenant des jeux de données Hugging Face (#77d58aa).
- Corrections de formatage et suppression de caractères inutiles dans la documentation (#b4a5299, #613b733).
