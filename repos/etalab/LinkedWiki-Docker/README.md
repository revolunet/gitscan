# LinkedWiki-Docker [![Docker Automated build](https://img.shields.io/docker/automated/antoinede/linked-wiki)](https://hub.docker.com/repository/docker/antoinede/linked-wiki)

Dockerfile for wikimedia extension LinkedWiki. Available on [docker hub](https://hub.docker.com/repository/docker/antoinede/linked-wiki).


This extension makes it possible to embbed sparql query into a wikibase instance.

For example, in topo.transport.data.gouv.fr (a wikibase instance focused on transport), you can display a map with all the stops with:

```
{{#sparql:
SELECT ?lat ?long ?oLabel  WHERE {
  ?o p:P17 ?coord.
  ?coord psv:P17 ?coord_value.
  ?coord_value wikibase:geoLatitude ?lat;
    wikibase:geoLongitude ?long.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
|endpoint=http://localhost:8989/bigdata/sparql
|chart=leaflet.visualization.Map
|options=width=100%!height=500px
|log=2
}}
```
