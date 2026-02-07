## Changelog : monstagedeseconde (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a travaillé sur l'amélioration de la gestion des conventions de stage multi-établissements et multi-offres, avec des corrections de bugs et des améliorations de l'interface utilisateur. Des mises à jour techniques ont également été effectuées, notamment la mise à jour de Ruby et de Rails, ainsi que des corrections liées aux déploiements.

### Évolutions fonctionnelles
- Amélioration de la gestion des conventions de stage multi-entreprises, notamment l'ajout d'un champ pour le coordinateur (#744).
- Correction d'un bug empêchant les personnels d'établissement de signer les conventions (#734).
- Amélioration de l'affichage des informations sur la page de détails des conventions de stage (#729).
- Correction de l'affichage du rôle du représentant de l'organisation dans les conventions multi-entreprises (#728).
- Amélioration du formulaire de validation de planification (#745).
- Ajout de badges sur la page d'index des conventions de stage (#720).
- Amélioration de la gestion des offres multi-établissements avec des étapes et des cartes mises à jour (#730, #731, #732, #733).
- Correction de l'affichage de la description dans la page de détails des conventions (#726).
- Ajout d'une case à cocher pour les conventions mono/multi-offres (#753, #749).
- Correction d'un bug lié à l'envoi de conventions en signature pour les multi-entreprises (#738).

### Évolutions techniques
- Mise à jour de Ruby de 3.3.1 à 3.4.7 (#709).
- Mise à jour de Rails de 7.1 à 7.2 (#724).
- Refactorisation de la suppression du champ `weekly_lunch_break` (#720).
- Correction de problèmes liés aux dépendances Yarn et `package-lock.json` pour améliorer les déploiements.
- Correction de problèmes avec la configuration des gems et des tests.

### Autres changements
- Correction de typos et améliorations de la formulation dans l'interface utilisateur.
- Nettoyage de code et suppression de code mort.
- Mise à jour des dépendances `diff` et `copier` (#746, #747).
- Correction de tests suite à des modifications de l'interface utilisateur.
- Amélioration de la gestion des seeds pour les tests.
