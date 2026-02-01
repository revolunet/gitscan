[![img](https://img.shields.io/badge/code.gouv.fr-publi%C3%A9-orange.svg)](https://code.gouv.fr/documentation/#quels-degres-douverture-pour-les-codes-sources)
[![img](https://img.shields.io/badge/We%20support-BlueHats-blue.svg)](https://bluehats.world)

⚠️ Depuis la fermeture de l'inventaire des codes sources, disponible auparavant sur [code.gouv.fr/sources](https://code.gouv.fr/sources), cette présentation est en partie obsolète.

# Présentation

Cette présentation de code.gouv.fr est proposée par la [mission logiciels libres de la DINUM](https://code.gouv.fr) à la fois [en ligne](https://code.gouv.fr/presentation/) et [en PDF](https://code.gouv.fr/presentation/codegouvfr-presentation.pdf).

Pour tout commentaire ou suggestion, veuillez nous [contacter](https://code.gouv.fr/fr/contact/).

# Publier

Installer `pipenv` et `mkdocs`:

```
pipx install pipenv
pipx install mkdocs
```

Publier la documentation:

```
cd documentation/
make env
# Move the index.md stub
mv index.md _index.md
make mkdocs
```

Pour publier aussi en version `pdf` et `txt`:

```
make pdf
make txt
```

# Contribuer

Vos contributions sont les bienvenues !  Voir ces [instructions](https://github.com/codegouvfr/codegouvfr-presentation/blob/main/CONTRIBUTING.fr.md).

# Licence

2025 Mission logiciels libres, DINUM.

Ce dépôt est publié sous [licence Ouverte 2.0](https://raw.githubusercontent.com/codegouvfr/codegouvfr-presentation/refs/heads/main/LICENSES/LICENSE.Etalab-2.0.txt).
