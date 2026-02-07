## Changelog : euphrosyne-tools-api (derniers 30 jours)

### Résumé
Ce mois-ci, l'API a bénéficié d'améliorations significatives en termes de gestion des données avec l'implémentation d'un client pour Azure Blob Storage. De nombreuses dépendances ont été mises à jour pour bénéficier des dernières corrections de bugs et améliorations de sécurité. Des corrections ont également été apportées pour résoudre des alertes de sécurité détectées par l'analyse du code.

### Évolutions fonctionnelles
- Implémentation d'un client Azure Blob Storage pour la gestion des données, permettant de stocker et de récupérer des données via Azure Blob Storage (#675).
- Ajout d'une interface client abstraite pour la gestion des données (#654).

### Évolutions techniques
- Mise à jour de `pytest` vers la version 9.0.2 (#658).
- Mise à jour de `azure-mgmt-compute` vers la version 37.1.0 (#674).
- Mise à jour de `pytest-asyncio` vers la version 1.3.0 (#671).
- Mise à jour de `sentry-sdk[fastapi]` vers la version 2.50.0 (#672).
- Mise à jour de `azure-mgmt-storage` vers la version 24.0.0 (#657).
- Mise à jour de `azure-identity` vers la version 1.25.1 (#660).
- Mise à jour de `types-requests` vers la version 2.32.4.20260107 (#659).
- Mise à jour de `python-dotenv` vers la version 1.2.1 (#655).
- Mise à jour de `azure-storage-file-share` vers la version 12.24.0 (#651).
- Mise à jour de `black` vers la version 25.12.0 (#650).
- Mise à jour de `azure-mgmt-web` vers la version 10.1.0 (#653).
- Mise à jour de `azure-storage-blob` vers la version 12.28.0 (#652).
- Mise à jour de `fastapi` vers la version 0.128.0 (#649).
- Mise à jour de `anyio[trio]` vers la version 4.12.1 (#648).
- Mise à jour de `mypy` vers la version 1.18.2 (#630).
- Mise à jour de `isort` vers la version 7.0.0 (#641).
- Mise à jour de `uvicorn[standard]` vers la version 0.38.0 (#645).
- Mise à jour de `aiohttp` vers la version 3.13.3 (#646).

### Autres changements
- Correction d'une alerte de sécurité concernant les permissions du workflow (#647).
- Correction d'une alerte de sécurité détectée par l'analyse du code (#647).
