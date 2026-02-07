## Changelog : anssi-recommandations-cyber (derniers 30 jours)

### Résumé
Ce mois-ci, l'application a bénéficié d'améliorations significatives en termes d'expérience utilisateur, de robustesse et de sécurité. Des fonctionnalités de copie de réponses ont été ajoutées, des corrections de bugs ont été implémentées pour améliorer la navigation et la gestion des erreurs, et des mises à jour de sécurité ont été appliquées. Des efforts ont également été faits pour améliorer la qualité du code et la configuration du projet.

### Évolutions fonctionnelles
- Ajout de la possibilité de copier le texte de la réponse pour faciliter son utilisation (#44f13c7).
- Un bouton a été ajouté pour permettre la copie de la réponse.
- Amélioration de l'affichage de l'infobulle indiquant que le message a été copié (#3da515d).
- Ajout de pages CGU et politique de confidentialité (#c175639).
- Ajout d'un bandeau informant les utilisateurs participant aux tests bêta (#78c4064).
- Correction du comportement de la flèche permettant de scroller en bas de page (#806c30a).
- Suppression de l'affichage du message d'erreur lorsque la zone de saisie est vide (#80b2448).
- Repositionnement du message d'avertissement au-dessus de la zone de saisie (#d912902).
- Soumission de la dernière question lors du clic sur le bouton "Réessayer" en cas d'erreur (#595d513).
- Affichage du message d'erreur directement dans la conversation (#61792f3).

### Évolutions techniques
- Mise à jour de `urllib3` pour corriger une vulnérabilité de sécurité signalée par Dependabot (#5306150).
- Suppression de `fastapi-armor` et mise à jour de `starlette` (#c02ea49).
- Suppression de l'environnement utilisé uniquement pour les notebooks (#019f8cb).
- Remplacement du `ConstructeurAdaptateurJournal` par une implémentation en mémoire pour les tests (#2b4bc6a, #40487ed).
- Initialisation de Sentry avec une implémentation en mémoire (#5f8b5e0, #75a6a1c).
- Refactorisation du code pour injecter un adaptateur de chiffrement (#4733fa5, #3812659, #ce18dae, #ce6c436, #0c43ed5).
- Ajout d'un githook pour exécuter Prettier et ESLint avant chaque commit (#67ee405).
- Application des règles Prettier sur tous les fichiers (#76fd581).
- Suppression de répertoires et fichiers inutiles (#94072d3).

### Autres changements
- Modification du champ utilisé dans les métadonnées pour extraire le nom du document (#a800dbb).
- Création d'une variable d'environnement pour paramétrer le décalage de page (#b99ec44).
- Correction d'un bug pouvant retourner 20 sources à l'utilisateur (#955d484).
- Ajout d'instructions au prompt pour prendre en compte les balises ajoutées par l'indexeur (#90e9d8d).
- Génération de l'URL avec le type d'utilisateur pour les appels à l'API (#1ccb3c4).
- Identification de l'utilisateur lors d'un retour d'information (#d670525).
- Correction du logo République Française (#c8a1179).
