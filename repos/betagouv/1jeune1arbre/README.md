# 1jeune1arbre

## Installation

Le projet requiert Node et quelques dépendances minimalistes.

### Développement local

```
git clone https://github.com/betagouv/1jeune1arbre.git
cd 1jeune1arbre
npm install
```

Ensuite on peut lancer le projet et son serveur local:

```
npm run dev
```

Un serveur tourne alors sur http://localhost:8080.


### Production

Lancer la commande `npm run build` pour construire le dossier "dist".

Un serveur frontal (Nginx, Apache…) devra servir le dossier racine.


## Licence

[MIT](https://mit-license.org/)
