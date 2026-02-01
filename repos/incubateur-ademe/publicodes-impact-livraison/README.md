# publicodes-impact-livraison

Modèle Publicodes pour le calcul de l'empreinte carbone de la livraison basé sur l'étude ADEME "Commerce en ligne impacts environnementaux de la logistique des transports et des déplacements"

## Installation

```sh
yarn install publicodes-impact-livraison publicodes
```

## Usage

```typescript
import { Engine } from 'publicodes'
import rules from 'publicodes-impact-livraison'

const engine = new Engine(rules)

console.log(engine.evaluate('salaire net').nodeValue)
// 1957.5

engine.setSituation({ 'salaire brut': 4000 })
console.log(engine.evaluate('salaire net').nodeValue)
// 3120
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
