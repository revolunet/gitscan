## Changelog : infomedicament-html-parser (derniers 30 jours)

### Résumé
Les récentes mises à jour du parseur infomedicament-html se concentrent sur l'amélioration de la gestion des ressources et de la stabilité lors du déploiement sur la plateforme Scalingo. Des optimisations ont été apportées pour réduire la consommation de mémoire et éviter les redémarrages fréquents des services.

### Évolutions techniques
- Refactorisation de l'application pour supprimer le mode NR et utiliser des dossiers S3 séparés pour les notices et les RCP (#01f1a4f).
- Implémentation d'un traitement par lots (batching) pour limiter l'utilisation de la mémoire sur Scalingo (#8ebdb72).
- Ajout d'une vérification de l'existence des fichiers sur le bucket S3 avant de les télécharger (#42e5e5d).
- Prise en compte de la chaîne de connexion Scalingo pour la configuration de la base de données MySQL (#664a34d).
- Suivi du fichier `poetry.lock` pour les déploiements Scalingo (#22deb96).
- Configuration du `ProcFile` pour éviter les erreurs de build et optimiser le déploiement (#068e239, #bd157a8).
- Ajustement de la taille des lots (batch size) à 1000 pour Scalingo (#9cdad04).
- Modification de la configuration de mise à l'échelle (scaling) pour éviter les redémarrages constants (#f7fc434).

### Autres changements
- Mise à jour de la documentation README pour refléter les changements de déploiement (#59682ff).
