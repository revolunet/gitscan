## Changelog : rag-facile (derniers 30 jours)

### Résumé
Ce projet a connu une refonte importante au cours des dernières semaines, passant d'un "RAG Starter Kit" à "RAG Facile". L'objectif est de fournir une trousse de démarrage plus accessible pour la construction d'applications RAG (Retrieval-Augmented Generation) utilisant l'API Albert, particulièrement pour les agents de l'administration française. De nouvelles fonctionnalités ont été ajoutées, notamment l'intégration de PDF et une interface de chat, ainsi que des améliorations de l'infrastructure et des outils de développement.

### Évolutions fonctionnelles
- Ajout d'une application de chat basée sur Chainlit, avec support du streaming et du traitement de fichiers PDF (#13, #4).
- Implémentation d'une interface utilisateur pour l'attachement et l'affichage de fichiers dans l'application de chat (#16b6318).
- Intégration de l'API Albert pour une utilisation simplifiée avec les services gouvernementaux (#5ba73a3).
- Ajout d'une application Reflex de chat (#7bd4106).
- Possibilité d'utiliser des variables d'environnement pour les clés API (#a26a598).
- Ajout d'une documentation pour les agents et contributeurs (#10).

### Évolutions techniques
- Refactorisation de la génération de templates, passant de Copier à Moon (#307dd88).
- Extraction du package `pdf-context` pour une meilleure organisation du code (#fd021ee).
- Amélioration de la gestion des templates avec l'utilisation de `just` pour la génération et l'instanciation (#2a93250).
- Migration de la génération de templates vers une CLI Python multi-app (#88990d2).
- Mise à jour de la version de Python à 3.13 pour assurer la compatibilité avec les dépendances (Pydantic, Reflex) (#0657255).
- Utilisation de `uv` pour l'installation des dépendances (#63ec4ab).
- Intégration de `direnv` pour la gestion de l'environnement de développement (#d2df794).
- Amélioration du pipeline de codemod hybride avec LibCST et ast-grep (#4dfff91).
- Suppression des templates générés et génération à la demande (#e5208eb).

### Autres changements
- Renommage du projet de "RAG Starter Kit" à "RAG Facile" (#c8f8312).
- Ajout d'un fichier `AGENTS.md` pour documenter les connaissances du projet (#a2c8beb).
- Mise à jour du fichier `README.md` pour refléter les changements et fournir des instructions d'utilisation claires (#a6f6c96, #c2d5ca6, #26d2e00).
- Ajout de commentaires `ty:ignore` pour supprimer les erreurs de typage dans Reflex (#e33b488).
- Ajout d'un fichier `.env.example` pour faciliter la configuration de l'application (#7c49d0d).
- Suppression du fichier `.envrc` du suivi Git (#0d687e2).
- Ajout du répertoire `.letta` au `.gitignore` (#13121d0).
- Mise à jour du fichier `uv.lock` avec les nouvelles dépendances (#cd9ab10).
