## Changelog : eva-serveur (derniers 30 jours)

### Résumé
Les dernières mises à jour d'eva-serveur se concentrent sur l'amélioration de l'expérience utilisateur, notamment lors de l'inscription et de la gestion des structures, avec une attention particulière portée à l'intégration et à l'affichage des informations relatives aux OPCO. Des refactorisations techniques ont également été réalisées pour optimiser la performance et la maintenabilité du code.

### Évolutions fonctionnelles

*   Amélioration de l'affichage du logo de l'OPCO financeur dans le footer et sur les résultats d'évaluation.
*   Ajout d'un composant pour afficher le score EvaPro avec différents paliers (A, B, C, D).
*   Refonte du tableau de bord EvaPro avec de nouveaux composants (CardDiagnostique, ScoreArrow, ScoreArrowsStack).
*   Amélioration du formulaire d'inscription : ajout de champs (téléphone, email professionnel), validation de l'affiliation OPCO, et simplification du processus.
*   Possibilité pour les créateurs de structure de confirmer leur habilitation à en être administrateur.
*   Affichage du bilan sur une restitution EvaPro.
*   Ajout d'une popup de confirmation de création de structure pour les utilisateurs Pro.
*   Correction de l'affichage des liens dans le footer.
*   Correction de l'erreur d'affichage du header sur la page de connexion.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.

### Évolutions techniques

*   Refactorisation du composant d'impact avec remplacement des steppers par le nouveau composant EvaProScore.
*   Séparation des vues d'évaluation entre EVA et EvaPro.
*   Ajout d'un helper `titre_evaluation` pour afficher le nom de la structure ou du bénéficiaire.
*   Simplification de la logique de `campagne_createur` et déplacement de la logique dans le parcours type.
*   Déplacement de la logique de sélection d'OPCO financeur dans le model `structure`.
*   Refactorisation de la gestion des OPCOs dans le contrôleur des structures.
*   Optimisation de la logique d'affiliation OPCO pour éviter les appels de service inutiles.
*   Intégration du service d'affiliation OPCO lors de la création et de la mise à jour des structures.
*   Refactorisation du composant Lien pour améliorer la gestion des liens.
*   Mise à jour de la version de Ruby.
*   Mise à jour de plusieurs dépendances.
*   Amélioration de la documentation de l'API Questionnaire.
*   Correction de l'affichage des logos.
*   Correction de la création de structure.

### Autres changements

*   Ajout d'un composant `mesure_chiffre_cle`.
*   Modification de la mise en avant dans le bloc coût des évaluations.
*   Changement de la présentation de la mesure des risques sur les évaluations.
*   Retrait des cards sur les restitutions EvaPro.
*   Correction de la taille du bouton de déconnexion sur la version mobile.
*   Correction du header non connecté sur la page d'inscription.
*   Déplacement des flash error de la page de connexion dans la colonne de connexion.
*   Mise à jour des traductions.
*   Suppression de la notion d'opco dans le composant footer.
*   Ajout de tests Puppeteer.
*   Correction de l'affichage des partenaires supplémentaires dans le footer.
*   Ajout de quelques espaces insécables.
*   Suppression du test de feature de session_spec.
*   Ajout du champ email dans Opco.
*   Ajout d'un numéro de téléphone et d'une URL sur les OPCOs.
*   Suppression de la case CGU et du champ associé dans le formulaire de création de compte.
*   Correction de la font sur le footer.
*   Ajout de la Sidebar OPCO sur le Tableau de Bord EVA Pro.
*   Correction de l'affichage de la campagne sur le tableau de bord.
*   Ajout de la méthode `affecte_usage_entreprise_si_necessaire`.
*   Ajout du champ 'passable' au model question et à l'API.
*   Correction de l'erreur du footer pour l'affichage des partenaires supplémentaires.
*   Correction du style du titre "Nos partenaires" du footer.
*   Correction de la font sur le footer.
*   Correction de l'erreur 500 quand l'Opco est vide.
*   Correction du lien FAQ dans le footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur du footer pour l'affichage des partenaires supplémentaires.
*   Correction de l'affichage des logos.
*   Correction de l'affiliation de l'opco à l'inscription.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
*   Correction de l'erreur 500 sur le footer.
*   Correction de l'erreur 500 lors de la récupération des OPCOs vides.
*   Correction de l'affichage du logo de l'OPCO.
*   Correction de liens cassés.
*   Correction de l'affichage des campagnes sur le tableau de bord.
*   Correction de l'affichage de la sidebar d'évaluation.
*   Correction du lien du header sur la page de connexion.
*   Correction de l'erreur d'affichage du footer.
