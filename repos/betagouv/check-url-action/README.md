# check-url-action

Github action that checks the presence of a specific page on url and report results as JSON.

## Usage

```yaml
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: "beta.gouv/check-url-action@main"
        with:
          baseUrl: https://beta.gouv.fr
          uri: stats
          output: stats.json
          minExpectedRegex: ^stat
          exactExpectedRegex: ^stats$
```

You can choose output file name and the URL and URI you want to check.

See [action.yml](action.yml) for details and default inputs.

## Hacking

To test locally, install [act](https://github.com/nektos/act).

```shell
npm run all
act
```
