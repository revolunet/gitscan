# collectivités.data.gouv.fr

Prototype d'un portail dédié aux collectivités (et plus).


## Install

- clone the project
- create a virtualenv
- `pip install -r requirements.txt`

## Configuration

Create a python file for configuration somewhere, and register it
with an environment variable:

    export COLLECTIVITES_SETTINGS='/path/to/your/file.py'

Inside the file, you need at least OAuth related settings to get
auth from Data.gouv.fr and a BAN client auth id and secret:

    DATAGOUV_CONSUMER_KEY = "xxx"
    DATAGOUV_CONSUMER_SECRET = "yyy"
    BAN_CLIENT_ID = 'zzz'
    BAN_CLIENT_SECRET = 'aaa'

## Run

To run the dev server:

    make serve
