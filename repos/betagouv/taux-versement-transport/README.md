# Archivé
Le code relatif au téléchargement des taux de versement mobilité est intégré dans le repo mon-entreprise : 
[Voir le fichier](https://github.com/betagouv/mon-entreprise/blob/master/site/scripts/fetch-versement-mobilit%C3%A9.js)

# API

Une API hyper basique permet de récupérer le taux SMT + AOT d'une commune : https://versement-transport.netlify.com/.netlify/functions/taux-par-code-commune?codeCommune=75120

Elle fonctionne grâce aux Fonctions Netlify. **On met simplement à jour [un fichier JS](https://github.com/betagouv/taux-versement-transport/blob/master/source/taux-versement-transport-data.js)** qui correspond au CSV des taux de versement transport fourni par l'URSSAF en XLSX. Pourquoi pas un CSV directement ? Car j'ai galéré à importer un CSV dans Netlify Functions à l'époque, à cause des loaders Webpack.

Attention : avant chaque commit, il faut faire `yarn netlify-lambda build source/` (dans l'état actuel du dépôt, peut-être qu'il est possible de s'en passer).

> 🔺 Le travail décrit ci-dessous n'est plus fait en 2019, car nous n'avons plus besoin de l'historique ni du fichier complet, juste de l'API


# Données


Ce dépot permet de scrapper le widget de l'URSSAF (ou plus exactement son "API" cachée) donnant les taux de versement transport par commune :
https://www.urssaf.fr/portail/home/taux-et-baremes/versement-transport.html

L'URSSAF met à disposition la table des taux à l'adresse : https://fichierdirect.declaration.urssaf.fr/TablesReference.htm

...MAIS :

- l'historique n'y est pas
- les taux additionnels y étaient au moins jusqu'à début 2017, tous à 0, ce qui rend les données erronées.
- au 1er juillet 2018, les taux de cette table ne sont pas à jour (changements du 1er juillet 2018)

L'URSSAF a été auparavant contactée plusieurs fois à ce sujet par plusieurs moyens différents, sans réponse.

Ce travail a été fait suite à plusieurs remarques des utilisateurs du simulateur de coût d'embauche, signalant le caractère osbolète des taux de versement transport d'OpenFisca.

## Utilisation

Mettre à jour le fichier des communes laposte, disponible en open data sur data.gouv.fr : `laposte_hexasmal.csv.

`collect.js` se base sur ce fichier pour produire `resultats.json`. **Attention**, choisissez un bridage des requêtes important (dans le code actuel, `rateLimit(1 REQUÊTE, PAR 300 MILLISECONDES)`) pour ne pas surcharger l'API.

`transformToJson` produit le fichier `final.json`.
