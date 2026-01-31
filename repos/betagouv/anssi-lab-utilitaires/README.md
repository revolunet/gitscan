# Utilitaires du Laboratoire d'Innovation de l'ANSSI

Une application backend fournissant des utilitaires transverses pour le Lab de l'ANSSI.

## Lancer l'application

### En développement

L'application utilise plusieurs variables d'environnement.
Avant le premier lancement, il faut donc créer le fichier spécifiant ces variables `cp .env.template .env`, puis leur donner des valeurs adéquates.

```sh
pnpm run start:dev
```

## Contribuer

Pour lancer les tests qui se rechargent automatiquement lors de la mise à jour des sources, il faut utiliser :

```sh
pnpm run test:watch
```
