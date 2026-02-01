# Scalingo Krakend buildpack

> This buildpack aims at installing a [Krakend](https://krakend.io) instance on [Scalingo](https://www.scalingo.com) and let you configure it at your convenance.

[![Deploy to Scalingo](https://cdn.scalingo.com/deploy/button.svg)](https://my.scalingo.com/deploy?source=https://github.com/MTES-MCT/krakend-buildpack)

## Usage

[Add this buildpack environment variable][1] to your Scalingo application to install the `Krakend` server:

```shell
BUILDPACK_URL=https://github.com/MTES-MCT/krakend-buildpack
```

Default version Krakend is `latest` found in github releases, but you can choose another one:

```shell
scalingo env-set KRAKEND_VERSION=2.12.0
```

## Configuration

Environment variables are listed in [Krakend configuration doc](https://www.krakend.io/docs/configuration/environment-vars/), starting with `KRAKEND_`

### Listening port

In .env set these vars:

```shell
KRAKEND_NAME=MyAPI
KRAKEND_PORT=$PORT # required to use Scalingo PORT
```

If no config files is in your repo, it uses default config: `/app/krakend/config/krakend.json`
You can override or custom it by specify in [Procfile](https://doc.scalingo.com/platform/app/procfile) and [flexible config](https://www.krakend.io/docs/configuration/):

```shell
  web: /app/krakend/bin/krakend run --config /app/my-krakend-file.json
```

## Hacking

Environment variables are set in a `.env` file. You copy the sample one:

```shell
cp .env.sample .env
mkdir -p .build .cache
```

Run an interactive docker scalingo stack [2]:

```shell
docker run --name krakend -it -p 9080:9080 -v "$(pwd)"/.build:/build -v "$(pwd)"/.cache:/cache -v "$(pwd)"/.env:/env/.env -v "$(pwd)":/buildpack scalingo/scalingo-24:latest bash
```

And test in it:

```shell
bash buildpack/bin/detect
bash buildpack/bin/env.sh /env/.env /env
bash buildpack/bin/compile /build /cache /env
bash buildpack/bin/release
```

Run Krakend server:

```shell
export KRAKEND_PORT=9080
build/krakend/bin/krakend run --config build/krakend/config/krakend.json
```

You can also use a complete docker-compose playground stack [3] with keycloak as IdP and [Nginx with modsecurity WAF](https://github.com/coreruleset/modsecurity-crs-docker):

```shell
cd dev
cp .env.sample .env
docker compose up --build -d
```

[1]: https://doc.scalingo.com/platform/deployment/buildpacks/custom
[2]: https://www.krakend.io
[3]: https://github.com/krakend/playground-community
