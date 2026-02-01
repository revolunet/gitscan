# ImpactCO2 Redirect

Deployed on Scalingo ;

Use `BUILDPACK_URL`'s https://github.com/Scalingo/nginx-buildpack.git internally.

Redirects are handled in "http" and "https", with and without "www".
| URL | Redirection |
| --- | --- |
| impactco2-redirect.osc-fr1.scalingo.io | impactco2.fr |
| impactco2.ademe.fr | impactco2.fr |
| datagir.ademe.fr | impactco2.fr |
| datagir.ademe.fr/apps/mon-convertisseur-co2 | impactco2.fr/comparateur |
| datagir.ademe.fr/apps/mon-impact-transport | impactco2.fr/transport |
| datagir.ademe.fr/apps/teletravail | impactco2.fr/transport |
| datagir.fr | impactco2.fr |
| datagir.fr/apps/mon-convertisseur-co2 | impactco2.fr/comparateur |
| datagir.fr/apps/mon-impact-transport | impactco2.fr/transport |
| datagir.fr/apps/mesfruitsetlegumesdesaison  | impactco2.fr/fruitsetlegumes |
| datagir.fr/apps/teletravail | impactco2.fr/transport |
| monconvertisseurco2.fr | impactco2.fr/comparateur |
| monconvertisseurco2.fr/iframe.js | impactco2.fr/iframe.fr |
| monimpacttransport.fr | impactco2.fr/transport |
| monimpacttransport.fr/iframe.js | local “transport/iframe.js” file |
| monimpacttransport.fr/transport | impactco2.fr/transport |
| monimpacttransport.fr/transport/iframe.js | local “transport/iframe.js” file |
| monimpacttransport.fr/transport/itineraire | impactco2.fr/transport/itineraire |
| monimpacttransport.fr/transport/itineraire/iframe.js | local “transport/itineraire/iframe.js” file |
| monimpacttransport.fr/transport/$1 | impactco2.fr/transport/$1 |
| mesfruitsetlegumesdesaison.fr | impactco2.fr/fruitsetlegumes |
| mesfruitsetlegumesdesaison.fr/iframe.js | local “fruitsetlegumes/iframe.js” file |
