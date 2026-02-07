## Changelog : drive (derniers 30 jours)

### Résumé
Les dernières mises à jour de Drive se concentrent sur l'amélioration de la sécurité, de la performance et de la stabilité de la plateforme. Des corrections de bugs ont été apportées à l'interface utilisateur et au backend, et des optimisations ont été réalisées pour réduire les requêtes à la base de données. L'application a également été modernisée avec de nouvelles dépendances et des outils de construction plus récents.

### Évolutions fonctionnelles
- Correction d'un bug dans l'interface utilisateur qui unifiait l'étiquette de suppression d'éléments dans différents composants. (#c3b850a)
- Ajout d'événements de téléchargement et de prévisualisation. (#1c1d923)
- Possibilité de spécifier une liste de types MIME de fichiers autorisés. (#3901e57)
- Possibilité de spécifier une liste d'extensions de fichiers autorisées. (#d7eccd7)

### Évolutions techniques
- Migration de l'outil de construction de paquets de `setuptools` vers `uv_build`. (#84e7dba)
- Mise à niveau de `pylint` vers la version 4.0.4. (#7beaa1f)
- Mise à niveau de `django-lasuite` vers la version 0.0.23. (#e54bbc3)
- Mise à niveau de `celery` vers la version 5.6.2. (#7967d08)
- Optimisation des requêtes à la base de données pour éviter les problèmes de N+1 lors du calcul de l'accès et du rôle des éléments enfants. (#c9bfdb9, #a42e802, #5a6d4c1)
- Amélioration de la détection du type MIME. (#a382b53)
- Suppression de l'utilisation de transactions atomiques pour la création d'éléments. (#5e16aa9)
- Prévention d'un décalage du type MIME entre le stockage d'objets et l'application. (#82cf211)
- Suppression de la configuration `AWS_S3_REGION_NAME`. (#201d728)
- Épingle de `celery` à une version inférieure à 5.6.0 pour éviter des problèmes. (#30075b1)
- Épingle de `mozilla-django-oidc` à une version inférieure à 5.0.0 pour éviter des problèmes. (#6d6040f)
- Épingle de `django` à une version inférieure à 6.0.0 pour éviter des problèmes. (#01e6f4a)
- Mise à niveau de `urllib3` vers la version 2.6.3. (#f665cb2)

### Autres changements
- Introduction de l'utilisation de `ds_proxy` avec Drive. (#ca6cbac)
- Publication des versions 0.11.1 et 0.11.0. (#a5de3ee, #6c61729)
- Mise à jour des dépendances Python. (#a5dfe41)
