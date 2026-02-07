## Changelog : Docurba (derniers 30 jours)

### Résumé
Les dernières mises à jour de Docurba se concentrent sur l'amélioration de la gestion des utilisateurs et des profils, notamment pour les PPA (Planification, Participation et Action). Des améliorations ont été apportées à l'interface utilisateur pour faciliter la navigation et l'accès aux informations, ainsi que des corrections de bugs pour assurer une meilleure expérience utilisateur. Des mises à jour techniques ont également été effectuées pour améliorer la stabilité et la performance de l'application.

### Évolutions fonctionnelles
- Les administrateurs peuvent désormais naviguer par département. (#5934f46, #8d7ef75, #54bd104)
- Les événements Sudocuh structurants sont maintenant reconnus par Docurba. (#8a1441b)
- Les utilisateurs DDT (Directions Départementales des Territoires) peuvent voir le module d'enquête. (#71a6b91)
- Les PPA peuvent accéder au tableau de bord. (#65a8c2e)
- Les PPA peuvent voir le lien vers le tableau de bord des DDT. (#f5194de)
- Améliorations de l'interface d'administration pour les profils. (#f7e4ef8)
- Affichage du poste Région et du nom de la région pour les utilisateurs. (#bc2fe39)
- Les enquêtes 2025/2026 sont activées pour tous les départements. (#7e1d7ad)
- Possibilité d'afficher les profils de PPA Région Ultramarine. (#c95a8aa)
- Correction d'un bug où l'annulation d'une commune validée supprimait les données des anciennes enquêtes. (#28a84a7)
- Ajout d'options à VDeptAutocomplete pour une meilleure expérience utilisateur. (#dd276cb)

### Évolutions techniques
- Mise à jour de nombreuses dépendances : Django (5.1.5 -> 5.2.10), pytest-django (4.10.0 -> 4.11.1), pre-commit (4.3.0 -> 4.5.1), ptpython (3.0.29 -> 3.0.32), filelock (3.19.1 -> 3.20.3), setuptools (75.8.1 -> 78.1.1), brotli (1.1.0 -> 1.2.0), urllib3 (2.3.0 -> 2.6.3), pytest-cov (6.0.0 -> 7.0.0), django-debug-toolbar (5.0.1 -> 6.2.0), django-extensions (3.2.3 -> 4.1), virtualenv (20.34.0 -> 20.36.1). (#20f4385, #61b6a6f, #0883d57, #2307099, #fbb0146, #e321eae, #5d4a086, #fa22a83)
- Mise à jour de la configuration pre-commit. (#82ea75a)
- Suppression de dépendances inutilisées (honcho). (#661598d)
- Suppression de code comparant les APIs pendant réécriture. (#661598d)
- Cache Sentry dans les stack traces de Debug Toolbar. (#366cf47)
- Refactoring du code pour améliorer la structure et la lisibilité. (#a55a7e6, #9d52ab6)
- Utilisation du code 302 pour les redirections. (#ec00a56)
- Modification du nom d'une variable dans Nuxt pour refléter un changement de comportement. (#6c50465)
- Suppression de code commenté. (#6c5ed2e)
- Correction d'une erreur locale dans la console Nuxt. (#beb24a6)

### Autres changements
- Création et suppression de recettes jetables. (#e7b2252)
- Ignorer RUF012 pour toutes les migrations avec Ruff. (#0896219)
- Re-génération de la migration initiale de users. (#a757b54)
- Désactivation du linter localement dans les Users Models. (#29d4295)
- Ajout de la colonne "users.departements". (#e13e23b)
- Ajout du side PPA à ProfileSideType. (#f44882b)
- Ajout des modèles User et Profile. (#822b77b)
- Les PPA ne peuvent pas supprimer de procédure. (#bd32a34)
- Les PPA ne peuvent pas créer de procédure secondaire. (#7162f03)
- Les PPA ne peuvent pas créer de procédure. (#bbc9383)
- Form Event - Pas de Visibilité choisie par défaut. (#eecb280)
- Form Event - Affiche erreur quand champ vide. (#25b53c7)
