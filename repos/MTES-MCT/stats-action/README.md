# stats-action

Github action that checks stats page on url and report results as JSON.

[![units-test](https://github.com/MTES-MCT/stats-action/actions/workflows/test.yml/badge.svg)](https://github.com/MTES-MCT/stats-action/actions/workflows/test.yml)

## Usage

```yaml
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: "MTES-MCT/stats-action@main"
        with:
          url: https://beta.gouv.fr
          uri: 'stats'
          output: 'stats.json'
```

You can choose output file name adn stats uri.

See [action.yml](action.yml) for details and default inputs.

## Hacking

To test locally, install [act](https://github.com/nektos/act).

```shell
npm run all
act
```
