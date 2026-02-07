## Changelog : mle-front (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a travaillé sur l'amélioration significative de l'expérience utilisateur, notamment avec l'ajout de fonctionnalités d'authentification (connexion, déconnexion, réinitialisation du mot de passe), la gestion des favoris, et l'intégration de nouvelles sources de données comme WordPress et la carte des loyers. De nombreuses corrections de bugs et améliorations de l'interface ont également été apportées pour une meilleure fluidité et accessibilité de la plateforme.

### Évolutions fonctionnelles
- Ajout de la fonctionnalité de connexion et déconnexion pour les étudiants et les bailleurs. (#1234)
- Implémentation de la réinitialisation du mot de passe.
- Possibilité d'ajouter et supprimer des logements favoris depuis la page de détails d'un logement.
- Ajout d'alertes pour les étudiants.
- Intégration de WordPress pour la diffusion d'informations.
- Ajout d'un filtre pour les logements CROUS.
- Ajout d'un filtre pour les logements accessibles aux personnes handicapées.
- Ajout d'une fonctionnalité de recherche de loyers avec un modal dédié.
- Ajout de la possibilité de publier/dépublier des logements.
- Ajout d'aides pour les orientateurs.
- Amélioration de la gestion des images (réordonner, suppression).
- Affichage du prix lorsque le minimum et le maximum sont identiques.
- Ajout d'un compteur d'alertes.
- Ajout d'une redirection après l'inscription si une résidence est sauvegardée sans authentification.
- Amélioration de la redirection après la connexion.
- Correction de la redirection de la ville depuis une alerte.
- Correction de l'affichage des types de logements sur la carte.
- Correction de la redirection de la page d'accueil après la connexion.
- Correction de la préservation des paramètres de recherche lors d'un clic sur un résultat d'autocomplétion.

### Évolutions techniques
- Mise à jour de NextJS.
- Mise à jour de Biome pour le linting.
- Amélioration de la gestion des paramètres de recherche avec NextJS 16.
- Refonte de l'authentification avec NextAuth.
- Utilisation d'un éditeur WYSIWYG pour la description des logements.
- Amélioration de la gestion des images (qualité, redimensionnement).
- Ajout de tests unitaires.

### Autres changements
- Amélioration des textes et libellés de l'interface utilisateur.
- Correction de problèmes de padding et d'alignement.
- Ajout d'un lien vers la carte des loyers.
- Suppression de l'indexation pour les pages d'académie.
- Correction de bugs mineurs et améliorations de la performance.
- Ajout d'illustrations pour les boutons radio.
- Amélioration de la gestion des tooltips.
- Correction de la pagination pour conserver le filtre CROUS.
- Correction de la validation des formulaires.
