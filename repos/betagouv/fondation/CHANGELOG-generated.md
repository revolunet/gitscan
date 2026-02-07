## Changelog : fondation (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à la fondation au cours du dernier mois. Les principales évolutions concernent la gestion des observations, des fichiers et des affectations, ainsi que des corrections de bugs pour améliorer l'expérience utilisateur et la stabilité de l'application. De nouvelles fonctionnalités ont été ajoutées pour faciliter le suivi des dossiers et la gestion des informations.

### Évolutions fonctionnelles
- Ajout de la possibilité pour les rapporteurs de commenter les observations (#158).
- Amélioration du suivi des observations avec la possibilité d'ajouter des commentaires et d'utiliser un éditeur WYSIWYG (#152).
- Ajout de la possibilité de modifier les observations (#131, #170).
- Ajout d'une alerte lorsque un fichier nécessite l'avis de deux rapporteurs (#145).
- Ajout de la possibilité de définir des priorités pour les fichiers associés aux membres (#146, #153).
- Ajout d'un lien vers lolfi pour les magistrats (#149).
- Ajout d'avatars standard pour les utilisateurs (#148).
- Ajout de la possibilité d'associer des résultats à des fichiers de nomination (#117, #132).
- Ajout du nombre de fichiers de session pour chaque membre (#122).
- Ajout de statistiques sur les membres (#121).
- Ajout d'une page d'aide avec les règles d'utilisation (#100).
- Ajout de mémos pour les membres (#137).
- Possibilité de fournir des résultats pour plusieurs fichiers de nomination (#132).
- Amélioration de l'affichage des affectations par grade (#144).
- Ajout d'un indicateur du nombre de fichiers nécessitant un rapport (#145).
- Ajout de la possibilité de suivre l'évolution des observations (#160, #161).
- Ajout de la possibilité de saisir des commentaires et des observations pour les rapporteurs uniquement (#158).

### Évolutions techniques
- Mise à jour de la librairie Zod (#125).
- Mise à jour de la version de Node.js vers la version 24 (#127).
- Refactoring de la table des fichiers de nomination pour utiliser un composant DataTable (#154).
- Refactoring du point de terminaison de recherche de magistrat (#136).
- Amélioration de la gestion des valeurs optionnelles dans les requêtes multipartBody (#130).
- Création d'un composant DataTable réutilisable (#128).
- Utilisation de `@hey-api/openapi-ts` pour la génération de la documentation de l'API (#124).
- Ajout d'une intégration Sentry pour la gestion des erreurs (#159).
- Ajout de hooks de pré-push pour valider la présence d'une référence de ticket (#147).
- Ajout d'un hook SG (#157).
- Ajout d'une authentification basique (#156).

### Autres changements
- Correction d'un problème de redirection lolfi (#155).
- Correction de bugs liés à l'affichage des membres non publiés (#150).
- Correction d'un problème d'attachement de fichiers en session (#151).
- Correction de problèmes d'affichage des images (#142).
- Correction de problèmes liés à l'auto-affectation et à l'affectation manuelle (#123, #120).
- Correction de bugs mineurs dans l'interface utilisateur (#133, #134, #135, #138, #139, #140, #141, #143).
- Correction de problèmes liés à l'export Excel avec les résultats (#133).
- Correction d'un bug empêchant l'affichage correct du modal magistrat (#178).
- Correction d'un bug lié à l'affichage déterministe du modal magistrat (#178).
- Correction d'un bug lié au réinitialisation du commentaire lors du changement de fichier (#147).
- Correction d'un bug lié à l'encodage de l'URL publique du nom de fichier (#159).
- Suppression de tris inutilisés (#135, #141).
- Suppression de fonctionnalités inutilisées (#134, #194).
- Amélioration de la gestion des priorités des fichiers (#153).
