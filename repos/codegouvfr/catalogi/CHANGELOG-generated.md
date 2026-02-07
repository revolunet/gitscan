## Changelog : catalogi (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à catalogi au cours des 30 derniers jours. Les principales évolutions concernent l'import de métadonnées depuis GitHub et GitLab, l'amélioration de l'interface utilisateur et la correction de plusieurs bugs, notamment liés à la gestion des versions et des traductions.

### Évolutions fonctionnelles

- Ajout de l'import de métadonnées depuis GitLab (#291).
- Amélioration de l'import de métadonnées depuis GitHub, avec une récupération complète des informations (#317).
- Affichage des métadonnées du dépôt (activité, type) dans l'interface utilisateur (#203).
- Correction d'une traduction française incorrecte pour le nombre d'instances publiques (#2f0a31c).
- Migration des routes des logiciels pour utiliser l'ID au lieu du nom, améliorant la stabilité et la performance (#7be2371).
- Ajout d'options de formatage de date dans l'interface utilisateur (#203).
- Ajout d'une configuration UI (#203).

### Évolutions techniques

- Refactorisation du code pour améliorer la structure et la lisibilité, notamment le déplacement de `castToSoftwareExternalData` et la suppression de code mort (#2c0eb84, #f9bdcc0, #111b3a4).
- Suppression de l'utilisation de variables d'environnement au niveau bas du code (#ed04989).
- Suppression de `dotenv` des tests (#4b8e3df).
- Migration de la colonne `versionMin` vers les attributs personnalisés, simplifiant la structure de la base de données (#2e27311).
- Amélioration de la fonction `mergeArrays` pour préserver l'ordre des éléments (#7ef7389).
- Mise à jour des appels GitHub pour la récupération des métadonnées de dépôt (#50b1adc).

### Autres changements

- Correction de plusieurs bugs et améliorations mineures de l'interface utilisateur (#6e5f910, #50d51a3, #2463050, #01826e8).
- Correction de problèmes liés à la configuration et au chargement des métadonnées (#fa2dfc1).
- Suppression de références obsolètes à `softwareMinimalVersion` (#a1069cb).
- Bump de version (plusieurs) (#635dda6, #f8435ef, #c3a6390, #3bbefc6).
- Correction de tests (#17463d6, #92210e9).
