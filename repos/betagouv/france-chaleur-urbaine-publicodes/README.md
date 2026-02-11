# Publicodes x France Chaleur Urbaine

[API docs](https://betagouv.github.io/france-chaleur-urbaine-publicodes/)

Modèle [Publicodes](https://publi.codes/) du comparateur réalisé en partenariat avec l'association [AMORCE](https://amorce.asso.fr/) dans le cadre de l'[action C3 du programme européen Heat & Cool](https://www.cerema.fr/fr/actualites/quels-leviers-collectivites-locales-developper-reseaux)

## Usage

```sh
# installe les dépendances
pnpm install

# compile le modèle publicodes en un fichier JSON et lance la documentation (mode watch)
pnpm dev
```

### Publier une nouvelle version

Afin de publier une nouvelle version il suffit d'exécuter la commande `npm version`, pour créer un commit avec la nouvelle version dans le package.json et faire un tag git.

```sh
# prochaine version v0.X.0
pnpm version minor
```

Il ne reste alors plus qu'à pousser le commit et le tag pour créer une release sur le [registre NPM](https://www.npmjs.com/package/@betagouv/france-chaleur-urbaine-publicodes).

```sh
git push && git push --tags
```

## Development

```sh
# Install the dependencies
pnpm install

# Compile the Publicodes rules
pnpm compile

# Run the tests
pnpm test

# Run the benchmark
pnpm bench

# Export all debug tables (as in DebugDrawer) to a CSV file
pnpm export-csv

# Run the documentation server
pnpm dev
```

## CI

Le workflow exact `publish.yaml` a été approuvé en tant que [trusted publisher sur npmjs.com](https://www.npmjs.com/package/@betagouv/france-chaleur-urbaine-publicodes/access) afin de pouvoir publier automatiquement les tags vX.X.X et pouvoir les réutiliser dans le dépôt [france-chaleur-urbaine](https://github.com/betagouv/france-chaleur-urbaine).
