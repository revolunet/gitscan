## Changelog : Aidants_Connect (derniers 30 jours)

### Résumé
Les dernières mises à jour d'Aidants Connect améliorent l'expérience utilisateur en clarifiant certaines informations et en corrigeant des erreurs d'affichage. De nouvelles fonctionnalités sont également en cours de développement, notamment un cockpit de gestion des formations. Des corrections ont été apportées pour assurer la cohérence des données et le bon fonctionnement des processus d'inscription.

### Évolutions fonctionnelles
- Ajout d'un message d'information sur la page d'ajout d'un aidant concernant l'arrêt des cartes. (#1708)
- Modification du formulaire de choix de connexion pour une meilleure clarté. (#1707)
- Changement du label du bouton de validation du code OTP pour une meilleure compréhension. (#1699)
- Mise à jour des Conditions Générales d'Utilisation (CGU). (#1703)
- Modification de l'URL de la page FAQ accessible depuis la page de connexion. (#1700)
- Amélioration de l'affichage des informations concernant les personnes enregistrées dans l'administration Django. (#1701, #1702)
- Correction d'un bug empêchant l'inscription d'un aidant P2P si le formateur n'existe pas dans la base de données. (#1695, #055d395)

### Évolutions techniques
- Développement d'un MVP (Minimum Viable Product) du cockpit de gestion des formations. (#1698)
- Utilisation de `format_html` pour afficher des informations dans l'administration Django, améliorant la sécurité et la flexibilité. (#1701)
- Vérification de l'existence de l'aidant formateur déclaré pour le P2P dans la base de données avant l'enregistrement. (#1695)

### Autres changements
- Suppression des liens vers Twitter de l'Incubateur des territoires. (#1704)
- Corrections orthographiques diverses. (#1709, typo fix)
- Mise à jour de la dépendance `filelock` de la version 3.20.0 à la version 3.20.3. (#1697, #76c8a73)
