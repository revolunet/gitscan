## Changelog : seves (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées à Seves au cours des 30 derniers jours. Les principales évolutions concernent l'ajout de nouvelles fonctionnalités pour la gestion des fiches Seves et des documents, ainsi que des optimisations de performance et des corrections de bugs pour améliorer l'expérience utilisateur. Des modifications ont également été apportées à la gestion des TIAC et SSA, notamment en termes de règles et de filtres.

### Évolutions fonctionnelles
- Ajout de la possibilité de télécharger massivement des fiches Seves (#4fb9590).
- Amélioration de la gestion des documents avec la possibilité de télécharger en masse et d'éditer les documents existants (#237b4a8, #fc195af).
- Ajout de filtres pour le numéro d'agrément sur les TIAC (#0bc2453).
- Possibilité de répondre à davantage de types de messages (#0593aa9).
- Ajout de nouvelles catégories de produits (#2b3eb58).
- Ajout d'un organisme nuisible (#9d164e0).
- Ajout de pages statiques et de liens dans le pied de page (#e8f1216).
- Amélioration de l'affichage dans le bloc commun (#8bbe02d).
- Amélioration de la vue d'historique pour les événements simples (#7988e79, #fa4a1ac, #565cef5).
- Ajout d'un mécanisme de verrouillage sur TIAC et SSA (#49fcb83).
- Possibilité de filtrer les messages dans le fil de suivi (#f8ad23b).

### Évolutions techniques
- Mise à jour de Django (#58340a3).
- Optimisation des performances sur les pages de mise à jour et celles avec de nombreux messages (#20510ba, #5790462).
- Amélioration des performances de TIAC et SSA (#c127a55).
- Correction d'un problème de détection du type MIME lors du téléchargement de fichiers docx (#66dd5f5).
- Correction de tests instables en s'assurant que les structures ont des noms différents et en améliorant les tests pour la recherche de TIAC (#a8e0777, #8275356, #eefa9b0).
- Ajout d'une variable d'environnement pour contrôler l'envoi d'emails d'accès (#468b4f6).
- Ajout d'un fichier `.editorconfig` pour uniformiser le style du code (#7c4e382).
- Correction de l'affichage des messages d'erreur vides lors du téléchargement massif (#d47d0ae, #8b997ba).
- Remplacement de l'URL par du texte dans les notifications par email (#b9bac75).

### Autres changements
- Ajout de règles pour les champs de précision sur le formulaire TIAC (#da80f67, #9508cee).
- Modification des libellés pour les dangers syndromiques TIAC (#c111e50).
- Ajout de règles pour les champs d'investigation TIAC conclusion (#4a54b38).
- Modification de la représentation chaîne de caractères de Repas pour les exports DOCx et CSV (#ab1f605).
- Modification des valeurs pour CategorieDanger (#66fb6cb).
- Ajout de l'ON pour la Santé des végétaux (#3301f8a).
- Ajout du numéro d'agrément sur l'établissement TIAC (#e5dabf8).
- Correction de la notification par email pour l'export (#a358bef).
- Ajout d'une bannière personnalisée pour l'environnement de préproduction (#7029506).
- Modification et ajout de catégories de produits (#62d9731).
- Mise à jour des dépendances : ruff, django-dirtyfields, django-debug-toolbar, django-reversion, celery, sentry-sdk[django] (#15c17b9, #da88ef8, #49b8d20, #2de42b4, #2e24c70, #1e1a2f1).
