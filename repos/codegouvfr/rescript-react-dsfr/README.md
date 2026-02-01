<div align="center">
  <h3 align="center">
	<big><code>rescript-react-dsfr</code></big>
  </h3>
  <p align="center">
   <a href="https://github.com/codegouvfr/rescript-react-dsfr/issues">Report Bug</a>
   •
   <a href="https://github.com/codegouvfr/react-dsfr"><code>react-dsfr</code></a>
   •
   <a href="https://components.react-dsfr.codegouv.studio/">Components API</a>
  </p>

![Static Badge](https://img.shields.io/badge/%40codegouvfr%2Freact--dsfr-v1.2.1-blue)

🇫🇷 ReScript bindings for the
[`react-dsfr`](https://github.com/codegouvfr/react-dsfr) TS library.

</div>

> [!IMPORTANT]
> This project has only been tested for the needs of the
> [`catala-dsfr`](https://github.com/CatalaLang/catala-dsfr) project.

## Installation

```sh
yarn add @codegouvfr/rescript-react-dsfr
```

Then add it to `bsconfig.json`:

```diff
"bs-dependencies": [
+  "@codegouvfr/rescript-react-dsfr"
]
```

## Usage

> [!TIP]
> You can look a the [demo web
> app](https://github.com/codegouvfr/rescript-react-dsfr/tree/main/demo) or at
> a real-world example in the
> [`catala-dsfr`](https://github.com/CatalaLang/catala-dsfr) repository.

### Start a DSFR app

```rescript
DSFR.Spa.startReactDsfr({
  defaultColorScheme: #system,
  link: Link.make,
  useLang: () => #fr,
})
```

### Use a component

The API should be straightforward to use as it try to match as closely as
possible the original API. At the difference that constants strings are
replaced by polymorphic variants and that reserved keywords in ReScript like
`type` or `as` are suffixed with an `_` (e.g. `type_` or `as_`).

For example, for the `Badge` component:
```typescript
// In a .tsx file

import { Badge } from '@codegouvfr/react-dsfr/badge'

let button = (
    <Badge type="info" as="span" noIcon={true} severity="new">
       Nouveau 
    </Badge>
)
```

```rescript
open DSFR

// In a .res file
let button = (
    <Badge type=#info as_=#span noIcon=true severity=#new>
        {React.string("Nouveau")}
    </Badge>
)
```

### Use the `cx` function

The `DSFR.Fr.cx` function is used to generate class names from an array of
variants. It allows to type check the class names and provides suggestions
from you IDE.

```rescript
open DSFR

let e = 
    <div className={Fr.cx([#"fr-grid-row", #"fr-grid-row--center"])}>
        //...
    </div>
```

## Scripts

Polymorphic variants for class names `./src/DSFR__ClassNames.res` (such as
icon's id or color variants) are generated from the `@codegouvfr/react-dsfr`
source code. To update them, run:

```sh
yarn generate-classNames

# or it will be run automatically when installing the package
yarn 
```

> [!IMPORTANT]
> This script is run with [`bun`](https://bun.sh/) and it can be installed with
> `yarn` so you need to install it manually if you don't have it

## Status

> [!WARNING]
> Bindings are created by hand, looking at the
> [storybook](https://components.react-dsfr.codegouv.studio/). Therefore, _a
> minima_ all the API described in the storybook should be available but it is
> possible that some props are missing or that some props are not typed
> correctly.
> 
> Do not hesitate to open an issue or a PR if you find something.

✅ Implemented | ❌ Not implemented | 🚧 In progress

| Component             | Status |
| ---------             | :----: |
| `Accordion`           | ✅     |
| `AgentConnectButton`  | ✅     |
| `Alert`               | ✅     |
| `Badge`               | ✅     |
| `Breadcrumb`          | ✅     |
| `Button`              | ✅     |
| `ButtonsGroup`        | ✅     |
| `Callout`             | ✅     |
| `Card`                | ✅     |
| `Checkbox`            | ❌     |
| `consentManagement`   | ❌     |
| `Display`             | ✅     |
| `Download`            | ❌     |
| `Footer`              | ✅     |
| `FranceConnectButton` | ✅     |
| `Header`              | ✅     |
| `Highlight`           | ❌     |
| `Input`               | ❌     |
| `MainNavigation`      | ❌     |
| `Modal`               | ❌     |
| `MonCompteProButton`  | ✅     |
| `Notice`              | ✅     |
| `Pagination`          | ❌     |
| `PasswordInput`       | ❌     |
| `Quote`               | ❌     |
| `RadioButtons`        | ❌     |
| `SearchBar`           | ❌     |
| `Select`              | ❌     |
| `SelectNext`          | ❌     |
| `SlideMenu`           | ❌     |
| `Stepper`             | ❌     |
| `Table`               | ❌     |
| `Tabs`                | ❌     |
| `Tag`                 | ❌     |
| `Tile`                | ❌     |
| `ToggleSwitch`        | ❌     |
| `ToggleSwitchGroup`   | ❌     |
| `Upload`              | ❌     |
