## Changelog : anssi-portail (derniers 30 jours)

### Résumé
Ce changelog présente les évolutions récentes du portail de l'ANSSI. Les modifications incluent des améliorations de l'expérience utilisateur, notamment sur les pages d'accueil et de guides, ainsi que des corrections de bugs et des optimisations techniques. De nouvelles fonctionnalités ont été ajoutées, comme le suivi des téléchargements de guides et l'intégration de nouveaux financements cyber.

### Évolutions fonctionnelles
- Ajout d'un lien pour proposer un financement sur la page des financements. (#38caa43)
- Ajout d'un lien pour bénéficier de l'aide sur la page des financements. (#4c21f03)
- Ajout d'une note d'information sur la page des financements. (#7fd5a3c)
- Amélioration de la page d'accueil avec une nouvelle version (v2) intégrant la demande de diagnostic et des informations sur les organisations concernées. (#32b2ff7, #4013b32, #50bfb45, #6d7e5ae, #9174edf)
- Affichage du CERT Social sur la page des contacts utiles. (#d7d548a)
- Affichage des totaux dans les sections statistiques et de comparaison lorsque des filtres sont actifs. (#a3962bc, #dbd9c49)
- Ajout de 2 nouveaux secteurs d'activité dans le test de maturité. (#3afd127)
- Amélioration de la gestion des téléchargements de guides avec le suivi d'événements et l'intégration avec Matomo. (#0718976, #244c0df, #41087bf, #5dc80cc, #63c2a75, #71c8758, #ec98be3, #f8c6cf7)
- Affichage d'un message invitant à créer un compte pour accéder aux guides. (#8126ffc, #d649897)
- Modification du libellé "Pas besoin" par "Pas décisionnaire" dans la sortie du diagnostic. (#07d37af, #1c36fda)
- Correction de l'affichage des menus et des sections sur la page d'accueil. (#41c534e, #51dffb8, #666b773)
- Amélioration de la disposition de la page d'accueil et du chapeau. (#38a67c9, #c305af4)

### Évolutions techniques
- Mise à jour de la version de la librairie 'diff' en 8.0.3 pour des raisons de sécurité. (#d67b8b0)
- Refonte de l'intégration du WebComponent de demande de diagnostic simplifié, incluant le déploiement en démo et l'utilisation des ressources du cellar. (#1d1512b, #265d4c2, #74fd37e, #75cef37, #a2c0e20, #b9634ce, #fc586da)
- Amélioration de la gestion des variables d'environnement et du déploiement en production Node. (#2099ddb, #632750f, #651c485, #84d66b4, #97bb410, #fe6071c)
- Optimisation du chargement des composants Svelte et utilisation de cache PNPM. (#2f9fe6c, #651c485)
- Ajout d'un workflow périodique pour la mise à jour des financements. (#9197c7c)
- Amélioration de la gestion des événements et de la journalisation des connexions utilisateurs. (#83af494, #cf9118d)
- Mise en place d'un système de comparaison des financements. (#34f76ff, #4e25c2b, #53155fa, #61e13b4, #8cb4492, #9728af7, #c263b59)
- Refactoring du code pour améliorer la lisibilité et la maintenabilité. (#04ea3e4, #013b014, #07d37af, #4d6c9cb, #5cccd6a, #a88ee50, #c0d3a82)

### Autres changements
- Précision de la documentation sur l'intégration de la demande d'aide. (#2ea553d)
- Suppression du mot "simplifiee" dans le contexte de la demande d'aide. (#f8d3afc)
- Transmission du SIRET de l’aidant lors de la demande d’aide. (#a9d6dd9, #5be8a7f)
- Regroupement des informations de l’aidant dans un objet. (#bb9a8ae)
- Ajout d'un fichier README pour le WebComponent de demande de diagnostic. (#b9389c8)
- Suppression de scripts inutiles. (#fc20e49)
- Suppression de fichiers et assets obsolètes. (#187ee74, #6e284eb, #fffb334)
- Mise à jour de la page des statistiques. (#57a24e6)
- Correction de fautes de frappe et amélioration de la qualité du code. (#1558892, #4d6c9cb)
- Suppression de code commenté. (#4d6c9cb)
- Modification de certains noms de fichiers et de composants. (#a2af767, #3882de4)
- Ajout de commentaires et de documentation pour faciliter la compréhension du code. (#a2ab29a)
