# DashLord

Tableau de bord des bonnes pratiques techniques

L'acquisition des données ainsi que la génération du rapport sont automatisés par des [GitHub actions](https://github.com/features/actions)

### GitHub actions

- Le workflow `DashLord scans` permet de lancer un scan sur les URLs.
- Le workflow `DashLord report` est lancé à la fin de chaque `DashLord scans` et produit le rapport sous forme de site web.

Ces workflows sont déclenchables manuellement dans l'onglet "Actions"

## Customisation

- Le fichier [`dashlord.yml`](./dashlord.yml) permet de paramétrer les urls et quelques options du tableau de bord
- Le workflow [`.github/workflows/scans.yml`](./github/workflows/scans.yml) permet de customiser certains scanners
- Le workflow [`.github/workflows/report.yml`](./github/workflows/report.yml) permet de générer le rapport web en se basant sur [SocialGouv/dashlord-actions/report](https://github.com/SocialGouv/dashlord-actions).

## Liens

 - projet original : https://github.com/SocialGouv/dashlord
 - roadmap : https://github.com/orgs/SocialGouv/projects/13
