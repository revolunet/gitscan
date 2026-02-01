# dares-stats-branches

Extraction JSON des données issues de ["Les portraits statistiques de branches professionnelles" de la DARES](https://dares.travail-emploi.gouv.fr/donnees/les-portraits-statistiques-de-branches-professionnelles)

Données de 2020 publiées le 13 Juillet 2022.

Le résultat est dispo dans [./data.json](./data.json)

Une démo d'usage est dispo sur https://socialgouv.github.io/dares-stats-branches

```js
interface ConventionCollective {
  idcc: string;
  title: string;
  entreprises: {
    entreprises: Entreprises,
    etablissements: Etablissements,
    repartition: Repartition[],
  };
  chiffres: {
    effectifs: Effectifs,
  };
  salaires: {
    moyen: Moyen,
    ecartHF: EcartHf,
    repartitionSMIC: RepartitionSmic,
    repartitionSMIC105: RepartitionSmic105,
  };
}
```

more types in [./index.d.ts](./index.d.ts)

## Executer

Les données originales (xslx) doivent se trouver dans `./data`

```
yarn
node parse.mjs
```
