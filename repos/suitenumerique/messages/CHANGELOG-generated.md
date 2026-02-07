## Changelog : messages (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations apportées à Messages au cours du dernier mois. Les utilisateurs bénéficieront d'une meilleure gestion des pièces jointes, d'une expérience améliorée avec les invitations de calendrier, d'une recherche plus performante, et de corrections de bugs pour une utilisation plus stable et fiable. Des améliorations techniques ont également été apportées pour optimiser les performances et la maintenance du projet.

### Évolutions fonctionnelles
- Possibilité de transférer des pièces jointes avec les messages (#485).
- Affichage des invitations de calendrier dans l'interface (#481).
- Ajout d'une vue "Intégrations" dans la boîte de réception (#488).
- Amélioration de l'UX des vues de signature et de modèles de messages (#492).
- Possibilité de marquer un fil de discussion comme spam (#496).
- Amélioration de la recherche de destinataires (#476).
- Possibilité d'afficher les images externes via un proxy (#469).
- Ajout d'actions en lot via le glisser-déposer et dans le panneau des fils de discussion (#470, #471).
- Possibilité de créer une signature pour une boîte de réception (#490).
- Activation par défaut des modèles de messages (#490).

### Évolutions techniques
- Correction d'une fuite de mémoire lors de l'importation de fichiers MBOX volumineux (#516).
- Utilisation du cache Redis en développement (#515).
- Amélioration du parsing des emails RFC5322 et affichage des parties multiples dans l'interface (#463).
- Refactorisation du code des permissions pour les viewsets (#503).
- Amélioration du routage des tâches Celery (#504).
- Ajout d'une commande worker.py pour faciliter l'exécution des tâches asynchrones (#504).
- Correction d'une erreur d'écrasement de variable d'environnement Celery (#516).
- Ajout d'une vue d'administration pour les messages entrants et corrections mineures de l'admin (#505).
- Correction d'erreurs liées à la création de destinataires en doublon (#496).
- Correction d'une erreur SSL et amélioration de la gestion des échecs d'authentification (#495).
- Implémentation d'une limite du nombre maximal de destinataires par message (#474).
- Ajout d'un script d'automatisation des releases (#472).
- Éviter la sérialisation des erreurs Python en externe (#474).

### Autres changements
- Mise à jour des chaînes de traduction (#501, #494).
- Correction du nom par défaut du fichier "invitation.ics" pour les invitations (#507).
- Ajout de tests de fuzzing pour le parser (#507).
- Amélioration de la disposition pour les tablettes (#484).
- Correction de l'affichage de l'heure dans l'en-tête des fils de discussion (#484).
- Correction du comportement de "Répondre à tous" (#471).
- Correction de la logique d'accès au rôle pour les boîtes de réception (#491).
- Suppression de l'affichage de la bannière d'image dans un fil de discussion plié (#484).
- Implémentation d'images Docker de production (#451).
- Correction du retour de message spam lors de la recherche de message supprimé (#484).
- Ajout de la possibilité de marquer un message comme lu (#484).
- Liaison du referer netloc dans l'objet du message (#478).
