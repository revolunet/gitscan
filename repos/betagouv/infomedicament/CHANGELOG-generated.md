## Changelog : infomedicament (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a concentré ses efforts sur l'amélioration de la performance et de la stabilité de l'application, notamment en remplaçant l'accès aux données via l'API Grist par des requêtes directes à la base de données. Des améliorations de sécurité ont également été apportées, ainsi que des corrections de bugs et l'ajout de tests pour garantir une meilleure qualité du code.

### Évolutions fonctionnelles
- Correction d'un bug empêchant l'affichage correct des pages de médicaments avec des codes CIS invalides (#156).
- Amélioration de la gestion des codes ATC, avec un retour d'erreur 404 en cas de code non trouvé (#158).
- Correction de la regex pour une meilleure correspondance des termes du glossaire dans les notices (#149).
- Correction de la recherche pour des requêtes très courtes, en limitant la correspondance aux noms de spécialités (#147).
- Amélioration de l'affichage des médicaments génériques, centralisés et non commercialisés (#143).
- Amélioration de la mise en évidence des questions et intégration du glossaire dans les notices (#143).

### Évolutions techniques
- Remplacement progressif de l'utilisation de l'API Grist par des requêtes directes à la base de données (PostgreSQL) pour les données de substances, pathologies, MARR, glossaire, articles et ATC (#151, #152, #144, #145, #146).
- Optimisation de la performance de la fonction de recherche en utilisant `truncate` au lieu de `delete` pour vider la table d'index (#175).
- Ajout de tests unitaires et d'intégration pour améliorer la couverture et la qualité du code (#144, #152, #153).
- Mise à jour de Next.js vers la version 15.5.10 et de Vitest vers la version 3.0.5 (#174).
- Ajout de rate limiting pour protéger l'API contre les abus (#146).
- Implémentation de mesures de sécurité supplémentaires, notamment l'ajout d'en-têtes CSP (Content Security Policy) et la protection des routes API (#146).
- Amélioration de la configuration du devcontainer pour faciliter le développement local (#141, #145).

### Autres changements
- Ajout d'un script pour charger les données de référence de Grist dans la base de données (#144).
- Nettoyage du code et suppression de fichiers inutilisés (#141, #151).
- Mise à jour de la documentation et ajout de commandes pour exécuter les tests (#144).
- Amélioration de la configuration des review apps sur Scalingo (#143).
- Ajout d'une route de débogage pour inspecter l'utilisation de la mémoire (#146).
