## Changelog : mon-service-securise (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a travaillé sur l'amélioration de la sécurité et de l'expérience utilisateur, notamment en renforçant la gestion des MFA (Multi-Factor Authentication), en préparant la fin des comptes legacy et en migrant progressivement le code vers Typescript pour une meilleure maintenabilité. De nombreuses validations via `zod` ont été ajoutées pour améliorer la robustesse de l'API.

### Évolutions fonctionnelles
- Ajout d'une modale d'information expliquant la fin des comptes legacy.
- Affichage d'un encart d'information sur la page de connexion concernant la fin des comptes legacy.
- Possibilité d'indiquer si l'utilisateur utilise un MFA lors de la connexion.
- Amélioration de l'affichage des totaux dans la liste de mesures.
- Correction d'un bug empêchant l'affichage de l'explication sur la visite guidée.
- La déconnexion révoque maintenant la session et le token JWT.
- Les CGU sont maintenant optionnelles.

### Évolutions techniques
- Migration progressive du code JavaScript vers TypeScript pour une meilleure typage et maintenabilité.
- Ajout de validations avec `zod` sur de nombreuses routes de l'API pour renforcer la robustesse.
- Suppression de l'adaptateur Mattermost pour la gestion des erreurs.
- Suppression des routes et vues V1 liées à la création et au téléversement de services.
- Refactorisation du code pour déplacer les routes dans des routeurs dédiés (roles/responsabilités, description de service, modèles de mesure spécifique, risques spécifiques, homologation).
- Passage de plusieurs composants et middlewares en `async/await`.
- Utilisation de `zod` pour valider les données d'entrée de nombreuses routes et middlewares.
- Suppression de code obsolète lié aux comptes legacy.
- Amélioration de la gestion des erreurs et du reporting.
- Nettoyage du code et suppression de dépendances inutiles.

### Autres changements
- Ajout d'un cronjob pour nettoyer la table des révocations JWT.
- Amélioration des logs pour faciliter le débogage.
- Mise à jour de la documentation.
- Correction de coquilles et amélioration de la lisibilité du code.
- Ajout de tests pour certains composants.
- Suppression de vérifications inutiles et simplification du code.
