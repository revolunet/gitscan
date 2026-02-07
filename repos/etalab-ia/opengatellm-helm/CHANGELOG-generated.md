## Changelog : opengatellm-helm (derniers 30 jours)

### Résumé
Les dernières mises à jour d'OpenGateLLM-helm se concentrent sur l'amélioration de la structure du chart Helm, avec une séparation claire entre le cœur d'OpenGateLLM et la stack complète. Plusieurs versions ont été publiées, incluant des corrections et des ajustements pour une meilleure stabilité et un déploiement plus flexible.

### Évolutions fonctionnelles
- Amélioration de la stabilité du déploiement avec l'augmentation du délai initial de vérification de l'état (liveness) d'OpenGateLLM à 30 secondes.
- Séparation du chart en deux parties : un chart pour le cœur d'OpenGateLLM et un autre pour la stack complète, offrant plus de flexibilité lors du déploiement (#32).

### Évolutions techniques
- Refactorisation et renommage du chart de base pour une meilleure organisation (#33).
- Correction du CI/CD pour assurer un processus de publication plus fiable.
- Publication de plusieurs versions :
    - `opengatellm-core 0.2.0` et `opengatellm-stack 0.7.0`
    - `opengatellm-core 0.3.0` et `opengatellm-stack 0.8.0`
    - `opengatellm-stack 0.7.0` (plusieurs publications)
