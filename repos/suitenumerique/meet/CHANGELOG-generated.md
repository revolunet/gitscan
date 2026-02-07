## Changelog : meet (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe de développement s'est concentrée sur l'amélioration de l'accessibilité de l'application, notamment pour les utilisateurs utilisant des lecteurs d'écran. Des corrections de sécurité ont également été apportées, ainsi que des améliorations de la transcription et de l'enregistrement des réunions. Des optimisations ont été faites sur l'infrastructure et la configuration pour une meilleure stabilité et performance.

### Évolutions fonctionnelles
- Ajout de la possibilité de configurer une redirection externe pour les utilisateurs non authentifiés (#904).
- Ajout du support des langues néerlandaise et allemande pour la transcription et le résumé des réunions.
- Amélioration des annonces pour les lecteurs d'écran concernant les actions de partage d'écran, les réactions et les effets de fond.
- Correction d'une vulnérabilité XSS sur la page d'enregistrement (#911).
- Amélioration de l'expérience utilisateur lors de l'éjection d'un utilisateur par un administrateur.
- Possibilité de choisir la langue de transcription.
- Ajout d'un lien de téléchargement pour les fichiers audio/vidéo des résumés.
- Possibilité pour les utilisateurs non privilégiés de demander un enregistrement.

### Évolutions techniques
- Configuration des webhooks LiveKit dans la pile Docker Compose locale.
- Mise à jour de la version de l'application à 1.5.0.
- Refactorisation du code pour centraliser les annonces pour les lecteurs d'écran.
- Amélioration de la gestion des raisons de déconnexion.
- Ajout de scans de sécurité Trivy pour les images backend.
- Utilisation d'une correspondance d'emails insensible à la casse dans l'API externe.
- Suppression de la tentative d'upgrade automatique de setuptools.
- Ajout d'un hook pour gérer les options d'accessibilité.
- Refactorisation du code pour améliorer la gestion de l'état de l'enregistrement.
- Ajout de la prise en charge du client Kyutai pour les sous-titres.
- Persistance des options d'enregistrement sur le backend.
- Intégration de Langfuse pour l'observabilité des appels d'API LLM.

### Autres changements
- Mise à jour de la documentation pour corriger des erreurs d'affichage et ajouter des exemples.
- Correction d'un lien incorrect dans le guide d'installation Docker Compose.
- Mise à jour des termes de service.
- Ajout d'une entrée de changelog pour la correction du tooltip visio.
- Ajout d'un fichier CHANGELOG.md pour documenter les changements du projet.
- Mise à jour des dépendances aiohttp vers la version 3.13.3 (correction de sécurité).
