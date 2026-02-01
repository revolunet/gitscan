# WAF playground

> A WAF stack to protect your webapps and APIs.

## Usage

A complete docker-compose playground stack with keycloak as IdP and [Nginx with modsecurity WAF](https://github.com/coreruleset/modsecurity-crs-docker), [Anubis Anti AI bots](https://github.com/TecharoHQ/anubis), [Krakend API Gateway](https://github.com/krakend/krakend-ce):

- app: your frontend webapp to protect
- api: your api backend to protect


```shell
cp .env.sample .env
docker-compose up --build -d
```
