## Changelog : gestion-des-subventions-locales (derniers 30 jours)

### Résumé
Ce mois-ci, les évolutions se concentrent sur l'amélioration de l'interface d'administration, la gestion des catégories de subventions (DSIL et DETR), l'optimisation des performances et la correction de plusieurs bugs, notamment concernant les notifications, les simulations et l'importation de données. Des améliorations ont également été apportées à la gestion des utilisateurs et à la génération de documents.

### Évolutions fonctionnelles
- Ajout du nombre de projets dans les listes de projets (#495).
- Affichage des catégories DETR : récupération et affichage (#492).
- Affichage des catégories DSIL : récupération et affichage (#491).
- Possibilité de compléter les dossiers reportés sans pièces justificatives (#496, #486).
- Ajout d'une fonction pour récupérer un dossier depuis DN à partir de son numéro (#469).
- Ajout de l'adresse mail de contact (#440).
- Répare l'édition des dotations dans la page simulation (#434).
- Ajout de l'import des utilisateurs (#442).
- Ajout d'actions dans la page admin des utilisateurs pour les activer ou les désactiver (#457).
- Ajout d'une liste des ProgrammationProjets sur la page admin de détail d'un DotationProjet (#464).
- Distinction dans l'affichage des infos ajoutées par le demandeur et celles ajoutées par l'instructeur sur la page projet (#482).
- Ajout des champs libres instructeurs dans "Annotations" (#494).
- Permettre de repasser un projet notifié en traitement (#480).
- Rajouter les champs de détails des champs "Autre zonage local" et "Autre contrat local" (#481).
- Affichage du tag "Reporté" pour les projets issus d'une demande précédente (#484).
- Correction de l'affichage des erreurs du formulaire de génération des arrêtés/lettres (#435).
- Correction de l'affichage des erreurs du formulaire de génération des arrêtés/lettres (#435).
- Correction de la logique d'affichage des enveloppes et des projets sur la page programmation (#452).
- Correction sur un test (calcul de la taille d'un document généré) (#486).
- Correction sur un sélecteur de dotations dans la page simulation (#479).
- Correction sur la re-programmation d'un projet sur une autre enveloppe (#483).

### Évolutions techniques
- Simplification de la modélisation : suppression de FieldMappingForHuman et nouveau nom de FieldMapping (#493).
- Refactoring : suppression de FieldMappingForHuman (#493).
- Création du modèle CategorieDsil et association avec le dossier (#493).
- Création du modèle CategorieDetr et association avec le dossier (#493).
- Optimisation des requêtes sur les Dossier et Projet dans l'admin (#441).
- Refactorisation : séparation des données brutes de dossier dans le modèle DossierData (#476).
- Optimisation de la migration des données en utilisant `iterator()` pour le queryset des dossiers (#488).
- Refactorisation de la logique de génération de documents pour les dotations multiples (#421).
- Amélioration de la configuration de sécurité (#419).
- Mise à jour des dossiers même si la date de mise à jour sauvegardée est supérieure ou égale à celle de DN (#489).
- Suppression du périmètre d'une démarche et des anciens champs (#472).
- Suppression de fichiers JavaScript inutiles (#472).
- Utilisation de classes CSS directement au lieu de fonctions (#472).
- Optimisation des requêtes dans l'admin des dossiers en différant le chargement de `raw_ds_data` (#448).
- Correction d'un problème potentiel de XSS (#483).
- Utilisation de `logger.exception` au lieu de `logger.error` (#483).
- Utilisation de `Http404` pour une gestion d'erreur cohérente (#435).

### Autres changements
- Ajout d'un guide utilisateur sur l'application (#461).
- Ajout de commentaires et de documentation pour améliorer la lisibilité du code.
- Corrections de tests et ajout de nouveaux tests pour garantir la qualité du code.
- Mise à jour des messages de succès lors des changements de statut (#436).
- Ajout d'un spinner et désactivation du bouton de soumission lors de l'envoi de formulaires (#477).
- Ajout de l'unicité du N° DN sur le modèle Dossier (#483).
- Suppression du sélecteur de statut lorsqu'un projet a été notifié (#432).
- Ajout de la possibilité de télécharger et supprimer les documents générés (#421).
- Ajout d'un message DN pour les dossiers en double dotation (#421).
- Ajout d'un onglet de notification par projet (#421).
- Ajout des champs booléens dans le modèle Projet (#466).
- Correction du trace_sampler Sentry (#465).
- Ajout du setting `SENTRY_PROFILES_SAMPLE_RATE` (#453).
- Réduction du taux de tracing des fichiers statiques (#463).
- MEP divers (#485, #473, #462, #456, #450, #437).
