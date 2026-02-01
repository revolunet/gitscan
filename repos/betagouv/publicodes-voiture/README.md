<div align="center">
  <h3 align="center">
	<code>@betagouv/publicodes-voiture</code>
  </h3>
  <p align="center">
   <a href="https://github.com/betagouv/publicodes-voiture/issues">Reporter un bug</a>
   •
   <a href="https://betagouv.github.io/publicodes-voiture/">Documentation intéractive</a>
   •
   <a href="https://github.com/betagouv/publicodes-voiture/blob/master/CONTRIBUTING.md">Contribute</a>
   •
   <a href="https://publi.codes">Publicodes</a>
  </p>

Modèle de calcul des coûts et de l'empreinte CO2e de la possession et
l'utilisation d'une voiture individuelle et de ses alternatives. Il existe un
client autonome [`agir-voiture`](https://github.com/betagouv/agir-voiture) et
une intégration est en cours dans l'application
[J'agis](https://jagis.beta.gouv.fr).

</div>

> [!WARNING]
> Ce projet est en cours de construction et est susceptible de fortement
> évoluer. Voir le [document de travail](/specs.md) pour plus d'informations
> sur le projet.

## Usage

Ajouter le paquet à vos dépendances :

```
yarn add @betagouv/publicodes-voiture
```

### Avec la classe `CarSimulator`

Afin de faciliter la réutilisation du modèle, ce paquet expose en plus des
règles [Publicodes](https://publi.codes) (accessibles depuis
[`./src/rules`](./src/rules), une classe
[`CarSimulator`](https://www.jsdocs.io/package/@betagouv/publicodes-voiture#CarSimulator)
qui encapsule un moteur [Publicodes](https://publi.codes).

> [!NOTE]
> To see the full API documentation, please refer to
> [jsDocs.io](https://www.jsdocs.io/package/@betagouv/publicodes-voiture).

```typescript
import { CarSimulator } from "@betagouv/publicodes-voiture"

// Initialisation du moteur (parsing des règles Publicodes)
const simulator = new CarSimulator()

// Définition des paramètres (cad. les réponses aux questions)
simulator.setInputs({
  "voiture . prix d'achat": 10000,
  "voiture . occasion": true,
  "voiture . gabarit": "moyenne",
  "voiture . motorisation": "thermique",
  "voiture . thermique . carburant": "gazole B7 ou B10",
  "usage . km annuels . connus": true,
  "usage . km annuels . renseignés": 5000,
  "voiture . thermique . prix carburant": 5,
  "voiture . durée de détention totale": 10,
  // ...
})

// Calcul pour la voiture "actuelle"
console.log(simulator.evaluateCar())
// Sortie :
{
  emissions: {
    value: 1115.731110659287,
    unit: "kgCO2e",
    title: "Empreinte carbone annuelle de votre voiture",
    isEnumValue: false,
    isApplicable: true,
  },
  cost: {
    value: 4344.882978723404,
    unit: "€/an",
    title: "Coûts annuels de votre voiture",
    isEnumValue: false,
    isApplicable: true,
  },
  size: {
    value: "moyenne",
    unit: undefined,
    title: "Monospace",
    isEnumValue: true,
    isApplicable: true,
  },
  motorisation: {
    value: "thermique",
    unit: undefined,
    title: "Thermique",
    isEnumValue: true,
    isApplicable: true,
  },
  fuel: {
    value: "gazole B7 ou B10",
    unit: undefined,
    title: "Diesel",
    isEnumValue: true,
    isApplicable: true,
  },
}

// Calcul des alternatives
const alternatives = simulator.evaluateAlternatives()

// Récupération des informations de la voiture cibles afin de filtrer les alternatives
// non compatibles (ex: ne pas proposer une voiture électrique si la personne
// n'a pas la possibilité de pouvoir recharger sa voiture quotidiennement).
simulator.setInputs(
  {
    "voiture . cible . gabarit": "SUV",
    "voiture . cible . borne de recharge": false,
  },
  {
    // Permet de simplement mettre à jours les entrées au lieu de les écraser
    // (comportement par défaut).
    overwrite: false
  },
)
console.log(simulator.evaluateTargetInfos())
// Sortie :
{
  size: {
    value: "SUV",
    unit: undefined,
    title: "SUV",
    isEnumValue: true,
    isApplicable: true,
  },
  hasChargingStation: {
    value: false,
    unit: undefined,
    title: "Borne de recharge",
    isEnumValue: false,
    isApplicable: true,
  }
}
```

### Avec le moteur Publicodes

Il est également possible d'utiliser uniquement les règles Publicodes directement avec
`@betagouv/publicodes-voiture/rules` :

```typescript
import Engine from "publicodes"
import rules from "@betagouv/publicodes-voiture/rules"

const engine = new Engine(rules)

engine.setSituation({
  "voiture . prix d'achat": "10000 €",
  "voiture . occasion": "oui",
  "usage . km annuels . renseignés": "1000 km/mois",
  //...
})

const costs = engine.evaluate("coûts")
const emissions = engine.evaluate("empreinte")
```

### En local

#### Compiler le modèle

> Les règles Publicodes du modèle sont disponible dans le dossier
> [`rules/`](https://github.com/betagouv/publicodes-voiture/tree/main/rules).

```
yarn compile:rules
```

#### Lancer les tests

```
yarn test
```

#### Lancer la documentation

> [!TIP]
> Pour facilement parcourir la documentation et tester différentes situations pendant
> le développement, il est conseillé d'utiliser la commande `yarn dev` à la place.
> La `online-doc` sera bientôt dépréciée.

> Le code de la documentation est disponible dans le dossier
> [`online-doc/`](https://github.com/betagouv/publicodes-voiture/tree/main/online-doc).

Pour lancer l'app React en local permettant de parcourir la documentation du
modèle, il suffit d'exécuter la commande suivante :

```

yarn install --cwd doc

yarn doc

```

## Publier une nouvelle version

Afin de publier une nouvelle version il suffit d'exécuter la commande `yarn
version`.

```

```
