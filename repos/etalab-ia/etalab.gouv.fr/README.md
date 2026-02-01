# Etalab website


* Les fichiers statiques sont dans le dossier `/srv/etalab.gouv.fr` la VM etalab.gouv.fr hébergé sur Outscale. Le nom de domaine est géré par OVH.
* La configuration nginx est dans le fichier `/etc/nginx/sites-available/etalab.gouv.fr`.
* La génération du certification est gérée par Letsencrypt et certbot (plugin Nginx).
* Le renouvellement automatique du certificat , lancé à minuit tous les jours est configuré par un cronjob (cf. `sudo crontab -l`).

```bash
0 0 * * * /usr/bin/certbot renew --quiet
```
