# Règles communes Publicodes

Ensemble de règles communes utilisées pour l'implémentation des modèles [Publicodes](https://publi.codes/).

## Installation

```sh
yarn install publicodes-commun publicodes
```

## Development

```sh
// Install the dependencies
yarn install

// Compile the Publicodes rules
yarn run compile

// Run the tests
yarn run test

// Run the documentation server
yarn run doc
```

## Usage

### Directement depuis ce jeux de règles
```typescript
import { Engine } from 'publicodes'
import rules from 'publicodes-commun'

const engine = new Engine(rules)

console.log(engine.evaluate('mix électrique . empreinte carbone').nodeValue)
// 0.0519
```

### Dans un projet Publicodes

```sh
yarn add -D publicodes-commun
```

Dans un fichier `**.publicodes**` :

```yaml
importer!:
  depuis:
    nom: '@incubateur-ademe/publicodes-commun'
    url: https://github.com/incubateur-ademe/publicodes-commun
  dans: commun
  les règles:
    - mix électrique . empreinte carbone
    - mois par an
```

Les règles ainsi importées seront accessibles et utilisables dans le modèle. Par exemple:

```yaml
empreinte électricité:
    formule: commun . mix électrique . empreinte carbone * commun . mois par an * 100 kWh/mois
```