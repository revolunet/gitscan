# potentiel-integration-enedis

## Description

L'automatisation des imports de date de mise en service avec Enedis nécessite un échange de fichiers via un bucket S3. Ceci est dû aux contraintes de sécurité d'Enedis.

Cette intégration effectue les tâches suivantes

1. en mode `export` (fréquence ~mensuelle)

- récupération des dossiers de raccordements depuis l'API Potentiel
- génération d'un fichier CSV et upload dans S3
- notification par email qu'un fichier est disponible

2. en mode `import` (fréquence ~quotidienne)

- récupération du fichier CSV d'import (complété par Enedis) depuis S3
- pour chaque dossier de raccordement, mise à jour de la date de mise en service, et éventuellement correction de la référence dossier

## Utilisation

```bash
npm run build
npm run start:export 
# ou pour un export local, sans S3
npm run start:export --local

npm run start:import
# ou pour un import local, sans S3
npm run start:import --filename FILENAME
```


## Contribution

Le client d'API est automatiquement généré depuis le [schema Open API de Potentiel](https://potentiel.beta.gouv.fr/api/doc). 

En cas d'évolution du schema, regénérer le client :
- soit depuis l'application en local si les changements ne sont pas publiés : `npm run codegen`
- soit depuis la production `npx openapi-typescript https://potentiel.beta.gouv.fr/api/openapi -o ./src/potentiel-api.d.ts`

