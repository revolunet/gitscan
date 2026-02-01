# @betagouv/jamstack-loader

**@betagouv/jamstack-loader** est un chargeur pour Webpack qui permet de charger des fichiers de configuration et des données au format YAML dans des projets Jamstack. Il facilite la gestion des collections de données, permettant aux développeurs de structurer et d'accéder facilement à leurs données dans des applications modernes basées sur Jamstack.

## Fonctionnalités

- **Chargement de fichiers YAML** : Charge des fichiers de configuration et de données au format YAML.
- **Gestion des collections** : Permet de définir et de gérer des collections de données, facilitant l'accès et l'organisation des informations.
- **Intégration avec Webpack** : Conçu pour être utilisé comme un loader dans des projets Webpack.

## Installation

Pour utiliser **@betagouv/jamstack-loader**, vous devez d'abord l'installer via npm ou yarn. Exécutez l'une des commandes suivantes dans votre terminal :

```bash
npm install @betagouv/jamstack-loader --save-dev
```

ou

```bash
yarn add @betagouv/jamstack-loader --dev
```

## Configuration

Pour utiliser le loader dans votre projet Webpack, ajoutez-le à votre configuration Webpack. Voici un exemple de configuration :

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.yml$/,
        use: 'jamstack-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.yml'],
  },
  // autres configurations...
};
```

## Utilisation

Une fois le loader configuré, vous pouvez importer des fichiers YAML dans votre code JavaScript. Voici un exemple :

```javascript
import jamstackConfig from './path/to/config.yml';

// Accéder aux collections
const posts = jamstackConfig.collections.posts;
console.log(posts);
```

### Exemple de Fichier de Données YAML

Voici un exemple de fichier de configuration YAML que vous pouvez utiliser :

```yaml
collections:
  - name: posts
    folder: "data/posts"
    extension: yml
```

### Exemple de Fichier de Données

Vous pouvez également avoir des fichiers de données dans le dossier spécifié :

```yaml
# data/posts/post1.yml
title: "Mon premier post"
content: "Ceci est le contenu de mon premier post."
```

## Tests

Le projet utilise Jest pour les tests. Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```

ou

```bash
yarn test
```