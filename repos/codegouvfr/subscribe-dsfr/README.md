[![img](https://img.shields.io/badge/code.gouv.fr-ouvert-mediumseagreen.svg)](https://code.gouv.fr/documentation/#quels-degres-douverture-pour-les-codes-sources)
[![Software License](https://img.shields.io/badge/Licence-EPL-green.svg)](https://githut.com/codegouvfr/subscribe-dsfr/tree/main/item/LICENSES/LICENSE.MIT.md)

# Why?

[code.gouv.fr/infolettre](https://code.gouv.fr/infolettre/) uses [subscribe](https://github.com/bzg/subscribe) to let users subscribe to the BlueHats newsletter.

The [src/](src/) directory of this repository contains a HTML template file to deploy the `subscribe` web app using the [French design system](https://github.com/GouvernementFR/dsfr/) (aka DSFR).

![Subscribe DSFR screenshot](subscribe-dsfr.png)

# Deploy

See [these instructions](https://github.com/bzg/subscribe?tab=readme-ov-file#install-and-run) to install and run `subscribe`.

    ~$ subscribe -I src/subscribe-dsfr.html

# Contributing

We accept contributions but are not actively looking for them.

See [CONTRIBUTING.md](CONTRIBUTING.md).

# License

2025 DINUM, Bastien Guerry.

The code is published under the [MIT license](LICENSES/LICENSE.MIT.md).
