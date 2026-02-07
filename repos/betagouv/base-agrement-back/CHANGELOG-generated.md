## Changelog : base-agrement-back (derniers 30 jours)

### Résumé
Ce changelog fait état des premiers pas du projet `base-agrement-back`. Les modifications récentes concernent principalement la mise en place de l'environnement de développement, la configuration de l'intégration continue et la préparation du déploiement sur la plateforme Scalingo. Des tests API basiques ont également été ajoutés.

### Évolutions techniques
- Initialisation du projet NestJS avec TypeScript (#93deb63)
- Configuration de Prisma et Husky pour la gestion des migrations et des hooks Git (#930259d)
- Ajout d'un workflow GitHub Actions pour exécuter des tests et des validations avant chaque push (#629de1d)
- Intégration de Prisma dans le processus de build pour assurer la compatibilité avec Scalingo (#f4d9f42, #2a21f27)
- Correction du script de démarrage pour Scalingo (#fd7034f)
- Ajout de tests API basiques (#1d79e51)

### Autres changements
- Ajout d'un fichier `Procfile` pour la gestion des processus sur Scalingo (#25789c1, #9420981)
- Correction du chemin vers `main.js` dans `package.json` (#03fa603)
- Suppression du dossier `.idea` et du fichier `.gitignore` (#8acf318, #7bf45aa)
- Nettoyage du code et suppression de fichiers inutiles (#7e9b736)
- Ajout de `.dist` au `.gitignore` (#e794102)
- Correction d'un problème de génération de Prisma (#17a2dbb)
