# Piwik Logs Analyzer

# Setup

## Python Kernel

No specific setup.

## Node.js Kernel

> https://github.com/notablemind/jupyter-nodejs

```bash
$ npm install
```

## Récupérer les stats

La meilleure manière d'exporter les stats est de passer par l'API :

https://stats.data.gouv.fr/?module=API&method=Live.getLastVisitsDetails&idSite=1

Références :
- [construire l'url](https://developer.matomo.org/guides/reporting-api-tutorial#build-the-url)
- [appeler la méthode](Live.getLastVisitsDetails)
- [l'idSite à utiliser](https://developer.matomo.org/api-reference/reporting-api)
