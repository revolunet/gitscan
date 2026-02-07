## Changelog : aides-calculatrice-back (derniers 30 jours)

### Résumé
Ce changelog présente les récentes améliorations apportées au backend de l'application aides-simplifiées. Les modifications incluent l'ajout de la configuration Docker pour supporter différentes plateformes et la fusion de la branche Docker en cours de développement.

### Évolutions techniques
- Ajout de la configuration Docker et des scripts de construction pour supporter différentes plateformes (#6)
- Mise à jour de `openfisca-france` de v`^170.1.12` à `^174.2.8` pour intégrer les revalorisations de l'APL d'octobre 2025 et une réorganisation des paramètres d'APL (#7)
- Mise à jour de `openfisca-core` à la même version que `openfisca-france` (#7)
- Allongement du timeout par défaut à 120 secondes pour réduire les erreurs 504 (#4)
- Ajout de la configuration pour le déploiement sur Scalingo, incluant `.python-version` et `Procfile` (#3)

### Autres changements
- Mise à jour de la documentation `README` pour inclure un exemple d'envoi de requête à l'API web openfisca-france (#7)
- Ajout de payloads d'exemple pour le calcul et le résultat de l'APL (#7)
- Ajout de notebooks d'explicabilité pour l'APL en logement ordinaire et la garantie visale (#5)
- Ajout d'un exemple de requête pour la Garantie visale (`payloads/visale.json`) (#5)
- Initialisation d'un notebook d'explication de la garantie visale (#5)
- Ajout d'un `Makefile` avec des cibles pour l'installation, l'exécution de l'API web et le calcul de l'APL (#2)
- Initialisation d'un document de contribution (`CONTRIBUTING.md`) (#2)
- Ajout de requêtes types de calcul et de debug pour l'APL dans le dossier `payloads/` (#2)
