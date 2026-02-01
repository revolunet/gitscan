# Scalingo Anubis buildpack

> This buildpack aims at installing a [Anubis](https://github.com/TecharoHQ/anubis) instance on [Scalingo](https://www.scalingo.com) and let you configure it at your convenance.

[![Deploy to Scalingo](https://cdn.scalingo.com/deploy/button.svg)](https://my.scalingo.com/deploy?source=https://github.com/MTES-MCT/anubis-buildpack)

## Usage

[Add this buildpack environment variable][1] to your Scalingo application to install the `Anubis` server:

```shell
BUILDPACK_URL=https://github.com/MTES-MCT/anubis-buildpack
```

Default version Anubis is `latest` found in github releases, but you can choose another one:

```shell
scalingo env-set ANUBIS_VERSION=1.23.1
```

## Configuration

Environment variables are listed in [Anubis installation doc](https://anubis.techaro.lol/docs/admin/installation)

### Listening port

In .env set these required vars [2]:

```shell
BIND=":$PORT" # required to use Scalingo listening PORT
# default policies
POLICY_FNAME="/app/anubis/data/botPolicies.yaml" 
# (optional) if custom policies
# POLICY_FNAME="/app/anubis/data/custom/<your-bot-policy-filename>.yaml"
```

`<your-bot-policy-filename>.yaml` must be at your root repo.

## Hacking

Environment variables are set in a `.env` file. You copy the sample one:

```shell
ce dev
cp .env.sample .env
```

Run an interactive docker scalingo stack [3]:

```shell
docker run --name anubis -it -p 8080:8080 -v "$(pwd)"/.env:/env/.env -v "$(pwd)":/buildpack scalingo/scalingo-24:latest bash
```

And test in it:

```shell
bash buildpack/bin/detect
bash buildpack/bin/env.sh /env/.env /env
bash buildpack/bin/compile /build /cache /env
bash buildpack/bin/release
```

Run Anubis server:

```shell
export BIND=":8080"
# default policies
export POLICY_FNAME="/app/anubis/data/botPolicies.yaml"
build/anubis/bin/anubis
```

You can also use a docker-compose playground stack [4] with [Nginx](https://anubis.techaro.lol/docs/admin/environments/nginx):

```shell
cd dev
cp anubis/.env.sample anubis/.env
docker-compose up --build -d
```

[1]: https://doc.scalingo.com/platform/deployment/buildpacks/custom
[2]: https://anubis.techaro.lol/docs/admin/configuration/import
[3]: https://github.com/TecharoHQ/anubis
[4]: https://anubis.techaro.lol/docs/admin/environments/docker-compose
