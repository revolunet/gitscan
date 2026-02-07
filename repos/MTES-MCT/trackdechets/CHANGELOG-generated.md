## Changelog : trackdechets (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations et corrections apportées à trackdechets au cours du dernier mois. Les évolutions concernent principalement l'interface utilisateur, la gestion des bordereaux de déchets (BSDA, BSFF, BSVHU), la traçabilité, et des corrections de bugs pour améliorer la robustesse et l'expérience utilisateur. Des améliorations techniques ont également été apportées concernant les métriques et le déploiement.

### Évolutions fonctionnelles
- Possibilité de dupliquer une déclaration. (#4636)
- Autorisation des établissements fermés en tant que producteurs VHU, même en situation irrégulière. (#4635)
- Amélioration de l'affichage de la sélection d'un éco-organisme (DSFR) lors de la création d'un BSDA. (#4637)
- Ajout de l'adresse manuelle pour l'émetteur particulier sur les BSDA. (#4606)
- Mise à jour de la bannière d'information. (#4627)
- Ajout du mode de traitement sur le PDF d'un BSFF. (#4624)
- Affichage des bons lots entrants dans le cadre 10 des PDFs des BSVHUs. (#4625)
- Le champ destinationReceptionRefusedWeight est désormais obligatoire sur le BSDA. (#4638)
- Changement des règles de traçabilité DND/TEXS selon les types d'établissements. (#4643)
- Revoir la couleur du statut "En attente de traitement" de tous les bordereaux. (#4648)
- Correction de l'affichage des informations d'un transporteur étranger lors de la réouverture d'un BSDA. (#4644)
- Correction d'une page blanche. (#4645)
- Ajout de l'information sur la présence ou l'absence d'un récépissé de transport sur la modale de signature d'enlèvement du transporteur. (#4641)
- Ajout du récépissé de transport dans la modale de signature VHU.
- Correction de l'affichage de la timeline de l'émetteur sur la modale de signature émetteur. (#4640)
- Correction de la preview de la timeline BSVHU.
- Suppression du champ "consistence". (#4634)

### Évolutions techniques
- Ajout de métriques Node pour améliorer la surveillance et l'optimisation des performances. (#4620, #4616, #4618)
- Mise à jour des Dockerfiles. (#4532)
- Publication des images Docker. (#4639)
- Amélioration de la traçabilité des erreurs. (#4632)
- Correction d'un problème de changement de code/mode de traitement à la révision. (#4599)
- Correction d'un problème d'affichage des documents graphiQL. (#4614)
- Correction d'un problème de mismatch d'adresse lors de la mise à jour d'un BSVHU. (#4605)
- Suppression du traitement anti-XSS sur les strings retournés par l'API (revert d'un commit précédent). (#4631)
- Mise à jour du rate limiter. (#4572)
- Correction de l'initialisation du formulaire de signature opération BSVHU pour éviter les informations cachées. (#4615)
- Correction d'un bug empêchant l'inscription avec des caractères spéciaux uniquement. (#4621)
- Correction d'un bug empêchant l'inscription avec uniquement des espaces dans le nom. (#4613)
- Rend obligatoire l'ajout manuel du mode de traitement ELIMINATION pour le code D9F sur le BSDA et le DASRI. (#4592)

### Autres changements
- Mise à jour du logo MTES. (#4629, #4600)
- Mise à jour du changelog. (#4626)
- Ajout de détails sur les limites des champs libres. (#4623)
- Améliorations sur les parcelles. (#4628)
- Retour de recette : suppression de la mention "optionnel" sur le toggle terre valorisée. (#4608)
- Remontée des chemins d'erreurs et des champs scellés sur BSFF. (#4604)
- Mise à jour de la configuration de slugignore. (#4610)
