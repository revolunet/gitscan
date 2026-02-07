## Changelog : maestro (derniers 30 jours)

### Résumé
Cette version de Maestro apporte des améliorations significatives à la gestion des prélèvements, des programmations et des utilisateurs, avec un accent particulier sur la correction de bugs et l'amélioration de l'expérience utilisateur. De nouvelles fonctionnalités ont été implémentées, notamment l'EDI Sacha et la connexion SFTP, tandis que des refactorings ont été effectués pour améliorer la maintenabilité du code.

### Évolutions fonctionnelles
- Amélioration de la recherche de prélèvements grâce au remplacement des champs de sélection par des zones de recherche (#515).
- Ajout d'un lien vers la réglementation 2018-62 dans la gestion des prélèvements (#490).
- Implémentation de l'EDI Sacha pour l'échange de données (#375).
- Ajout de la connexion SFTP pour l'échange de fichiers (#508).
- Refonte du DAP (Document d'Analyse des Prélevements) (#434).
- Possibilité de télécharger les étiquettes pour un prélèvement déjà envoyé (#511).
- Correction de l'affichage des échantillons dans les prélèvements (#0b26d99).
- Correction de l'affichage des libellés de type de production (#516).
- Correction des pourcentages de réalisations dans les tableaux de programmation (#520).
- Alignement des indicateurs de la vue tableau sur la vue carte dans les programmations (#514, #518).
- Correction de l'accès à la programmation départementale pour un coordinateur ayant également un rôle de préleveur (#513).
- Correction des nombres de prélèvements affichés dans le dashboard (#509).
- Mise à jour des actions prioritaires dans le dashboard en fonction des plans et des rôles (#507).
- Correction des modalités d'échantillonnage (#510).
- Limitation de la liste des abattoirs affectables à un utilisateur (#499).
- Limitation de la liste des laboratoires affichés en fonction de leur agrément (#484).
- Correction du chargement des données fake pour l'agrément des laboratoires (#496).
- Correction d'un bug empêchant d'afficher uniquement les préleveurs sur le plan de surveillance (#525).
- Suppression de l'obligation du numéro de scellé pour le plan de surveillance (#524).
- Ajout du référentiel PPV 2026 (#523).

### Évolutions techniques
- Refactoring du code lié aux prélèvements pour utiliser des types plus spécifiques pour l'âge en mois et en jours (#522).
- Déplacement des référentiels des laboratoires vers la base de données (#470).
- Suppression des référentiels des laboratoires du code (#506).
- Ajout de la mascarade sur la page Utilisateurs pour faciliter le support et le débogage (#497).
- Correction du parcours prélèvement DAOA (#504).
- Correction d'un bug lié aux rôles d'utilisateur ayant un rôle régional et départemental (#492, #495).
- Correction d'un bug dans la création d'un plan de programmation à partir de celui de l'année précédente (#493).
- Suppression du message d'information sur la non-automatisation hors PPV (#498).
- Correction de la position du marqueur et ajout du click sur la carte (#501).

### Autres changements
- Correction de quelques fautes d'orthographe (#d11da60).
- Ajout d'un contrôle sur la présence d'un département pour les utilisateurs (#519).
- Correction de la mascarade pour les utilisateurs avec plusieurs rôles (#521).
- Mise à jour de certaines dépendances npm (Zod, aws-sdk/s3, react-router) (#505, #503, #502).
- Retrait des prélèvements non recevables du suivi (#469).
- Correction de l'affichage de l'onglet associé au plan de surveillance pour DAOA (#494).
