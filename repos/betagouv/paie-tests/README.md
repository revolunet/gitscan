Ludwig-based testing instance for the Paie API.

> Instance Ludwig pour le test de l'API Paie.


Usage
-----

### Install

Clone this repository, `cd` to it and run `npm install`.

### Access a Mongo database

Run a [Mongo](http://www.mongodb.org) database. Its host is defined in the NPM `package.json` file. If necessary, update the host with `npm config set ludwig-paie:mongoHost <hostname:port>`.

### Run

```shell
npm start
```

Configuration
-------------

The default port on which the app listens is defined in the `package.json`. If you want to change it, run `npm config set ludwig-paie:port <port>`.
