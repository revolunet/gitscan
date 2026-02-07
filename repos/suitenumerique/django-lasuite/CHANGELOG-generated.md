## Changelog : django-lasuite (derniers 30 jours)

### Résumé
Les récentes mises à jour de django-lasuite se concentrent sur la correction de bugs et l'amélioration de la gestion des jetons OIDC, notamment en ce qui concerne l'expiration et la compatibilité avec les versions récentes de `mozilla-django-oidc`. Une optimisation a également été apportée au module d'analyse de logiciels malveillants pour réutiliser les hachages de fichiers existants lors de la reprogrammation des tâches.

### Évolutions fonctionnelles
- Correction d'un bug dans la gestion OIDC où la clé de session incorrecte était utilisée pour vérifier l'expiration du jeton (#56).
- Amélioration du module d'analyse de logiciels malveillants : réutilisation du hachage de fichier existant lors de la reprogrammation d'une tâche.

### Évolutions techniques
- Compatibilité améliorée avec `mozilla-django-oidc >5.0.0` en permettant l'utilisation de `PyJWT`.
- Correction d'un bug lié à l'utilisation de `User.sub` nullable dans l'authentification OIDC.

### Autres changements
- Publication de la version 0.0.23.
