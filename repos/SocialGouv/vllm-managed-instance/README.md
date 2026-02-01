# getting started

## install

```sh
pyenv global 3.11
poetry install --no-root
```

## run

```sh
poetry run python main.py 
```

# ovh

- List instance flavors : https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/flavor
- List instance images : https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/image


# debugging

## resources

- https://cloudinit.readthedocs.io/en/latest/howto/debugging.html

## generate docker-compose template

install gomplate: https://docs.gomplate.ca/installing/
```sh
export SERVICE_REPLICAS=2
export GPU_BY_REPLICA=1
cat templates/docker-compose.tpl | gomplate > docker-compose.yaml
```