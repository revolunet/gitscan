## Changelog : projects (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à l'outil de gestion de projet "projects" au cours des 30 derniers jours. Les modifications incluent des corrections de sécurité, des améliorations de l'organisation des tableaux de bord, des mises à jour de l'infrastructure et des ajustements techniques pour simplifier le processus de développement.

### Évolutions fonctionnelles
- **Organisation des tableaux de bord :** Nouvelle fonctionnalité permettant une meilleure organisation des tableaux de bord. (#49)
- **Correction de vulnérabilité XSS :** Correction d'une vulnérabilité de type Cross-Site Scripting (XSS) dans la librairie `react-photoswipe-gallery`. (#48)

### Évolutions techniques
- **Mise à jour de Node.js :** Mise à jour de la version de Node.js utilisée par le projet. (#51)
- **Simplification de la gestion des paquets :** Suppression de `pnpm` et retour à `npm` pour simplifier la gestion des dépendances et éviter les confusions liées au patching de paquets.
- **Configuration ESLint :** Correction de la configuration ESLint pour éviter les erreurs liées à l'extension de la configuration depuis `package.json`.
- **Alignement des versions de Node :** Alignement des versions de Node.js utilisées dans les différents environnements.
- **Suppression du script de sauvegarde Scalingo :** Suppression du script de sauvegarde de la base de données PostgreSQL sur Scalingo. (#53)
- **Nettoyage de `package-lock.json` :** Nettoyage du fichier `package-lock.json` et ajout de `async overrides` dans `package.json`. (#50)
- **Correction CI :** Correction de la configuration CI pour utiliser `npm` dans les images Docker et s'assurer que certains paquets sont définis pour la production.

### Autres changements
- Application des patches de `patch-package` pour l'environnement de développement.
- Mise à jour de la branche `main` depuis `github.com:suitenumerique/st-projects`.
