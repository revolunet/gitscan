# nocodb-buildpack

> This buildpack aims at installing a [Nocodb](https://nocodb.com) instance on [Scalingo](https://www.scalingo.com) and let you configure it at your convenance.

## Usage

Simply deploy by cliking on this button:

[![Deploy to Scalingo](https://cdn.scalingo.com/deploy/button.svg)](https://my.scalingo.com/deploy?source=https://github.com/MTES-MCT/nocodb-buildpack#main)

Or create an app. You must have an add-on database `postgresql`.
[Add this buildpack environment variable][1] to your Scalingo application to install the Nocodb server:

```shell
BUILDPACK_URL=https://github.com/MTES-MCT/nocodb-buildpack#main
```

And other environment variables are set by example in a `.env.sample` file.

`PORT` and `SCALINGO_POSTGRESQL_URL` are provided by Scalingo.

Addon configuration by default:

```shell
NOCODB_DB=$SCALINGO_POSTGRESQL_URL # SCALINGO_POSTGRESQL_URL is provided by scalingo at app boot step
```

Warning ⚠️: you should copy the database url in `NOCODB_DB` and change `sslmode` if `prefer` is unknown by nocodb.

By default the buildpack install the latest release.

All other environment variables are specific to nocodb, see [documentation](https://github.com/nocodb/nocodb#environment-variables).

## Hacking

You set environment variables in `.env`:

```shell
cp .env.sample .env
```

Run an interactive docker scalingo stack:

```shell
docker run --name nocodb -it -p 8080:8080 -v "$(pwd)"/.env:/env/.env -v "$(pwd)":/buildpack scalingo/scalingo-18:latest bash
```

And test in it:

```shell
bash buildpack/bin/detect
bash buildpack/bin/env.sh /env/.env /env
bash buildpack/bin/compile /build /cache /env
bash buildpack/bin/release
```

Run Nocodb server:

```shell
export PATH=/build/nodejs/bin:/build/nocodb:$PATH
run /build/nocodb /build/nodejs
```

Check [http://localhost:8080/dashboard](http://localhost:8080/dashboard).

You can also use docker-compose in order to test with a complete stack (db):

```shell
docker-compose up --build -d
```

`.env.sample` is configured to work with this stack.

[1]: https://doc.scalingo.com/platform/deployment/buildpacks/custom
