# trackdechets-gotenberg

Guide d'administration du serveur [Gotenberg](https://gotenberg.dev/) permettant de générer les PDFs Trackdéchets

## Pré-requis

Installer [docker](https://docs.docker.com/engine/install/ubuntu/) et [docker-compose](https://docs.docker.com/compose/install/) sur le serveur.

Pour une installation plus rapide, [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) également.

## Installation


```bash
# Download code ⏬
$ cd /srv
$ git clone https://github.com/MTES-MCT/trackdechets-gotenberg.git
$ cd trackdechets-gotenberg

# Configure 📝
$ cp .env.model .env
$ vi .env

# Launch 🚀
$ docker-compose up -d --scale gotenberg=8
```

> Le scaling gotenberg est à adapter en fonction de la machine utilisée. D'après les premiers tests menés, un container par (v)cpu disponible semble être une bonne base de départ.


## Performance

Résumé du test de perf réalisé:
- génération de PDF DASRI
- machine Scaleway GP1-S (8 vCPUs, 32 GB RAM)
- 8 containers gotenberg (`--scale gotenberg=8`)
- ~20req/sec

## System D service

Voir gotenberg.service (à mettre dans /etc/systemd/system/)