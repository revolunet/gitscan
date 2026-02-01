[![img](https://img.shields.io/badge/We%20support-BlueHats-blue.svg)](https://bluehats.world)

# Catalogi

## A Software Catalog application

This repository contains Catalogi, a web application to manage software catalogs.

![A screenshot of Catalogi for the SILL](catalogi.png)

## Documentation

Documentation is available [here](https://codegouvfr.github.io/catalogi/)

## Catalogi deployments

1. [https://code.gouv.fr/sill](https://code.gouv.fr/sill/) is the list of recommanded Free Software for French administrations.
2. [https://logiciels.catalogue-esr.fr/](https://logiciels.catalogue-esr.fr/) list [HAL](https://hal.science/) for the French Ministry of Research.

## Code organization

Mais quels logiciels libres utiliser et pourquoi ? Quand plusieurs logiciels libres remplissent la même fonction, lequel privilégier ? Quelle version minimale est acceptable ?

- api: Application API (also includes jobs, that can be run periodically)
- web: Web frontend
- docs: Documentation, as deployed [here](https://codegouvfr.github.io/catalogi/)
- deploy-examples: Examples of deployment, including [Docker Compose](deploy-examples/docker-compose) and [Kubernetes with Helm](docs/5-deploying-with-kubernetes.md).

## Governance and contributions

# Historique

Le SILL était à l'origine une liste sous format PDF qui était mise à jour tous les ans par les groupes MIM (Mutualisation InterMinistérielle).

## License

Cette liste servaient aux DSI des ministères à faire les mises à jour nécessaires et à découvrir des logiciels libres utilisés par d'autres ministères.

En 2019, le SILL a été publié sous forme d'une application web à l'adresse https://sill.etalab.gouv.fr, qui redirigeait vers https://sill.code.gouv.fr depuis février 2023 jusqu'à présent, et désormais sur https://code.gouv.fr/sill. La page de visualisation était générée à partir de fichiers `csv` maintenus manuellement sur un dépôt public.

The documentation is published under [licence Ouverte 2.0](LICENSES/Etalab-2.0.md) and [CC-BY-4.0](LICENSES/CC-BY-4.0.txt).
