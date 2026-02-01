# DILA API Tests

## Setup

Copy `.env.sample` to `.env` with your [PISTE AIFE](https://developer.aife.economie.gouv.fr) application Oauth Credentials.

You can then create an application [here](https://developer.aife.economie.gouv.fr/apps) with the required API, and then open it and generate OAuth identifiers

## Python example

You need Python 3.6+

```sh
$ mkvirtualenv dila-api-tests
$ pip3 install -r requirements.txt
$ python3 run.py
```

## JavaScript example

```sh
$ yarn
$ node run.js
```
