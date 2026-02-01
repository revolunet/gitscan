# publicodes-empreinte-carbone-chauffage

Modèle publicodes pour le calcul d'empreinte carbone de l'énergie en France (données base empreinte ADEME et CEREN)

## Installation

```sh
yarn install publicodes-empreinte-carbone-chauffage publicodes
```

## Usage

```typescript
import { Engine } from "publicodes";
import rules from "Modèle publicodes pour le calcul d'empreinte carbone de l'énergie en France (données base empreinte ADEME et CEREN)";

const engine = new Engine(rules);

console.log(engine.evaluate("salaire net").nodeValue);
// 1957.5

engine.setSituation({ "salaire brut": 4000 });
console.log(engine.evaluate("salaire net").nodeValue);
// 3120
```

## Development

```sh
// Install the dependencies
yarn install

// Compile the Publicodes rules
yarn compile

// Run the tests
yarn run test

// Run the documentation server
yarn dev
```
