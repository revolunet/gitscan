```bash
pre-commit install
cp .env.local .env
uv run flask --app app run --host=0.0.0.0 --debug
```

Ce dépôt contient des [custom widgets](https://support.getgrist.com/widget-custom/) de Grist pour outiller la gestion budgétaire de la Ruche Numérique.

## Widget~~s~~ réutilisable~~s~~

- https://grist-budget.incubateur-agriculture.beta.gouv.fr/signer-pdf permet la signature de PDF directement dans grist. Les documents sont ajoutés dans la même colonne.

## Widgets dédiés

- https://grist-budget.incubateur-agriculture.beta.gouv.fr/ permet la visualisation et l'édition d'un prévisionnel. C'est un custom widget complètement lié à la structure du Grist de la Ruche. Ce n'est pas réutilisable en tant que tel mais cela peut être une source d'inspiration. L'objectif de ce widget c'est d'avoir une vue : un mois par colonne et une ligne par personne intervenante.

- https://grist-budget.incubateur-agriculture.beta.gouv.fr/decouper-conso permet de subdiviser une conso mensuelle en deux pour solder un bon de commande.

- https://grist-budget.incubateur-agriculture.beta.gouv.fr/duplication-previsionnel permet de dupliquer un prévisionnel avec toutes les lignes de « dépenses prévisionnelles » associées.

- https://grist-budget.incubateur-agriculture.beta.gouv.fr/chordee est une expérimentation pour gérer Chordée comme source de vérité alternative.

# Compléments techniques

## Documentation Next.js

### Getting Started

```bash
npm run dev
```

## Documentation Python

Le back end a deux points d'entrée intéressants, la ligne de commande `cli.py` et le serveur `app.py`.
