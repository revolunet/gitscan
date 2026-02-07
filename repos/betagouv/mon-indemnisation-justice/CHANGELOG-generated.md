## Changelog : mon-indemnisation-justice (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à la plateforme mon-indemnisation-justice au cours des 30 derniers jours. Les principales évolutions concernent la gestion des pièces jointes, la gestion des brouillons de déclaration, la correction de bugs et l'amélioration de l'expérience utilisateur pour les agents de l'administration.

### Évolutions fonctionnelles
- Permet de supprimer une pièce jointe d'un dossier (#cdc3d99).
- Permet de téléverser et d'afficher les pièces jointes liées à un dossier (#2264331, #2430100, #9aa32cd).
- Permet de créer une déclaration à partir d'un brouillon (#7b2c33b).
- Permet de soumettre un brouillon et de l'exclure de la liste après soumission (#967b44d).
- Permet de cloturer un dossier à attribuer (#8784739).
- Permet aux rédacteurs de téléverser la déclaration d'acceptation (#5c60207).
- Redirection vers la page de consultation après décision d'un dossier (#b7a97a0).
- Ajout d'un paragraphe sur l'arrêté de paiement dans la documentation (#d5f3be1).
- Ajout du guide aux documents et correction du lien FAQ à l'étape 1 (#8425331).

### Évolutions techniques
- Correction de la gestion de la locale sur Docker (#7161591).
- Correction du getter `id` manquant sur `CoordonneesRequerant` (#f44f491).
- Utilisation d'un `ENTRYPOINT` Docker pour lancer la migration au lieu de `CC_RUN_SUCCEEDED` (#0da4bf8).
- Correction de la transmission des informations du requérant de la déclaration vers le dossier (#fffdcbd).
- Introduction du brouillon dans le modèle et les endpoints API (#0a1281c).
- Écriture de tests unitaires pour les routes API (#ac83d6d).
- Correction de l'édition des droits et de la ré-attribution (#8d137ef).
- Correction de la sauvegarde et de la soumission (#7177f51).
- Activation des services sur le frontend (#6ddd03a).
- Correction de la transmission des informations du requérant (#89b2937).
- Correction de la création de déclaration à partir d'un brouillon (#7b2c33b).
- Correction de l'affichage du numéro sur la vue dossier (#ca63e31).
- Ajout de tests unitaires (#a574d35).

### Autres changements
- Mise à jour de la politique de confidentialité (#c7b6f5e).
- Correction de coquilles et améliorations de la formulation (#d6e7604, #a0f8b46).
- Correction d'un bug où le fichier sélectionné était parfois vide (#80827a7).
- Correction d'un bug Sentry concernant la sélection de fichiers (#3a51c0a).
- Correction de la conservation du rôle `ROLE_AGENT` lors de la mise à jour d'un agent (#ddc5f7b).
- Tentative de correction de l'accès aux documents (#27ba943).
- Tentative de correction d'un problème avec Tanstack (#50aedc7).
- Premier jet de la méthode `patch` (#ab200fe).
- Activation de la modale (#8e273c0).
- Liaison du modèle de déclaration FDO et de son brouillon aux pièces jointes (#0e4f2ab).
