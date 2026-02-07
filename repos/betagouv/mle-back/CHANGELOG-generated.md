## Changelog : mle-back (derniers 30 jours)

### Résumé
Les dernières évolutions de Mon Logement Étudiant (mle-back) se concentrent sur l'amélioration de la recherche de logements, la gestion des utilisateurs et la correction de bugs. Des améliorations ont été apportées à la recherche de territoires et à la gestion des alertes, ainsi qu'à la robustesse de l'application grâce à des contraintes d'unicité sur les adresses email et des corrections de sérialisation.

### Évolutions fonctionnelles
- Amélioration de la recherche de territoires (#38a5f05)
- Ajout du nombre d'alertes disponibles pour un utilisateur (#553ff58)
- Correction de l'affichage de l'URL du site frontal sur l'environnement de staging (#e82d533)
- Correction de l'ID dans le sérialiseur utilisateur (#b4e88de)
- Ajout de la bounding box (BBox) au sérialiseur de ville (#f0bd4d6)

### Évolutions techniques
- Ajout d'une contrainte d'unicité sur l'adresse email des utilisateurs au niveau de la base de données (#1a058d9)
- Refactorisation du code et suppression de code inutile (#f0af2eb, #b6129b5)
- Correction de l'importation des fichiers CSV en supprimant le BOM (Byte Order Mark) (#d5aa3e6)
- Amélioration des tests et correction de la sérialisation (#1ef61a4, #4ba5fc3, #25af037, #6008e6b)

### Autres changements
- Mise à jour de la dépendance `sentry-sdk` de la version 2.48.0 à la version 2.49.0 (#0d48cba)
- Mise à jour de la dépendance `ruff` de la version 0.14.10 à la version 0.14.11 (#f65dc51)
- Ajout de migrations (#7745c6a)
- Ajout d'un nouveau test (#25af037)
- Temporisation à 5 minutes pour les tests (#54d6f65)
