## Changelog : doctorat-gouv (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à la plateforme doctorat-gouv au cours des 30 derniers jours. Les modifications incluent l'ajout d'une page de contact, une page de détail des propositions de thèse plus complète, des améliorations de l'interface utilisateur, des corrections de bugs et des optimisations pour le déploiement sur la plateforme Scalingo.  Des efforts ont été faits pour adapter la plateforme aux exigences d'ADUM.

### Évolutions fonctionnelles
- Ajout d'une page de contact avec des contrôles améliorés et des messages de succès (#2).
- Création d'une page de détail pour les propositions de thèse, affichant des informations plus complètes, incluant les écoles doctorales, les objectifs de valorisation et les liens vers les profils ORCID des directeurs de thèse (#1).
- Amélioration de l'affichage des selectlists dans le formulaire.
- Ajout de la possibilité d'envoyer des pièces jointes via le formulaire de contact.
- Intégration de l'API d'envoi de mails Brevo pour l'envoi de notifications aux candidats et aux encadrants.
- Modification de l'affichage des mots-clés en minuscule.
- Ajout d'un lien vers la page ORCID du directeur de thèse.
- Ajout d'un header dans toutes les pages.
- Modification de l'ordonnancement du filtre de localisation par ordre alphabétique (#3).
- Remplacement du lien ORCID dans la page de détail par une icône ORCID (#3).

### Évolutions techniques
- Adaptation de la configuration pour le déploiement sur Scalingo, incluant l'utilisation de buildpacks, la configuration de Procfile, et la gestion des profils Spring.
- Modification du mode de build Angular pour la production.
- Limitation du pool size de la base de données pour supporter les limites de Scalingo.
- Ajout de logs en mode INFO et DEBUG pour faciliter le suivi des appels ADUM.
- Amélioration de la sécurité avec l'adaptation de la configuration CSP et l'ajout d'un favicon.
- Utilisation d'un fat jar pour faciliter l'exécution de l'application.
- Correction de problèmes de compilation liés à la configuration de Spring Security.
- Augmentation de la longueur des champs pour se conformer aux exigences d'ADUM.
- Ajout de mapping pour les images des propositions de thèse en fonction des ODD, domaines d'impacts et disciplines.

### Autres changements
- Amélioration des logs pour les appels ADUM.
- Ajout de la configuration CorsConfig.
- Ajout de fichiers system.properties pour Scalingo.
- Suppression de spring.profiles.active des fichiers properties et Procfile.
- Diverses améliorations de style SCSS.
- Correction d'un problème d'ordre de build entre le backend et le frontend.
- Désactivation du mode SSR et renommage du fichier environnement.prod.ts.
- Correction d'un problème de fileReplacmeent dans angular.json.
- Correction d'un problème de format Procfile.
- Ajout de logback pour les environnements de recette.
