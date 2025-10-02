# Welcome / SIGNALEMENT WEBAPP

## Description

Ce service est l'application front du projet SGMAP - DGS.
Il fonctionne avec le backend python du projet


## Lancement

### Lancement local

1.	dans *src/config.js*, mettre baseURL = 'http://localhost:5000'  (en supposant que le backend tourne sur le port 5000 sur le même ordinateur)
2.	lancer avec ./run_local.sh


### Lancement distant

1.  dans *src/config.js*, mettre baseURL = 'url_du_backend'		(chez starclay: "https://dgcl-aclia.starclay.fr")
2.  dans *package.json*, mettre "homepage": "url de déploiement du frontend"   (chez starclay: "https://dgcl-aclia.starclay.fr/dgs")
3. 	lancer avec ./run.sh

