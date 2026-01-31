## Cette documentation est technique. Pour plus d'informations sur le [simulateur d'aides pour les jeunes](https://mes-aides.1jeune1solution.beta.gouv.fr), regardez notre [wiki](https://github.com/betagouv/aides-jeunes/wiki).

> Le serveur de statistiques du [simulateur d'aides et de prestations sociales pour les jeunes](https://mes-aides.1jeune1solution.beta.gouv.fr), en parallèle de Matomo. Les résultats sont accessibles depuis le site [https://betagouv.github.io/mes-aides-analytics/](https://betagouv.github.io/mes-aides-analytics/)

# Setup

## Stack

- [ExpressJS](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [body-parser](https://www.npmjs.com/package/body-parser)

# Installation

Une fois le repository récupéré, il suffit d'exécuter les commandes suivantes :

```bash
npm install
CORS_DOMAIN=* npm start
```

Le serveur est accessible par défaut sur [`localhost:4000`](http://localhost:4000/)

Davantage de commandes liées au développement sont accessibles dans le `package.json`.

# Development

Pour lancer le serveur en mode développement avec nodemon, il faut exécuter la commande suivante :

```bash
npm run dev
```

Cette commande utilise nodemon avec le fichier server.js. Nodemon surveillera les modifications de fichiers et redémarrera automatiquement le serveur à chaque changement.

# Ajout de records

Pour pouvoir ajouter des records servant à établir des statistiques, le client doit envoyer une requête `POST` à l'url `http://localhost:4000/benefits`.

Les paramètres à remplir sont les suivants :

| Paramètre     | Description                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| benefit_id    | L'identifiant de l'aide                                                                                                                                      |
| hash_id       | Un identifiant permettant de reconnaitre l'utilisateur. Par défaut l'id Matomo.                                                                              |
| benefit_index | La position de l'aide affichée sur la page de résultat                                                                                                       |
| page_total    | Le nombre total d'aides affichées sur la page de résultat                                                                                                    |
| event_type    | Le type d'évènement : "show" lorsque l'aide est affichée à l'utilisateur, "showDetails" lorsque celui-ci affiche les informations liée à une aide spécifique |

Pour effectuer des tests, on peut faire une requête `curl` depuis un terminal:

```bash
curl -v -X POST \
  -H 'Content-Type: application/json' \
  -d '{"benefit_id": "RSA", "hash_id": "xxxxxxxxx", "benefit_index": 4, "page_total": 10, "event_type": "show" }' \
  http://localhost:4000/benefits
```

Pour ne pas avoir à effectuer autant de requêtes qu'il y a d'aides par page, on peut également envoyer plusieurs records à la fois :

```bash
curl -v -X POST \
  -H 'Content-Type: application/json' \
  -d '[{"benefit_id": "RSA", "hash_id": "xxxxxxxxx", "benefit_index": 1, "page_total": 2, "event_type": "show" }, {"benefit_id": "Livret d’épargne populaire", "hash_id": "xxxxxxxxx", "benefit_index": 2, "page_total": 2, "event_type": "show" }]' \
  http://localhost:4000/benefits
```

# Récupération des statistiques

Les statistiques sont récupérables sur `http://localhost:4000/statistics`.
La structure est la suivante :

```
[
  {
    "benefit":"depart1825_montant_maximum", => nom de l'aide en question
    "events_count": 232929,                 => nombre total d'évènements par aide
    "events": {
      "showDetails": {
        "2": {                              => 2 aides affichées sur la page
          "1": 3,                           => l'aide a été cliqué 3 fois alors qu'elle était en 1ère position sur 2
          "2": 12                           => l'aide a été cliqué 12 fois alors qu'elle était en 2ème position sur 2
        },
        "3": {                              => 3 aides affichées sur la page
          "1": 4,                           => l'aide a été cliqué 4 fois alors qu'elle était en 1ère position sur 3
          "2": 41,                          => l'aide a été cliqué 41 fois alors qu'elle était en 2ème position sur 3
          "3": 51                           => l'aide a été cliqué 51 fois alors qu'elle était en 3ème position sur 3
        },
```
