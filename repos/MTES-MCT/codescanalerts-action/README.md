# codescanalerts-action

[![units-test](https://github.com/MTES-MCT/codescanalerts-action/actions/workflows/test.yml/badge.svg)](https://github.com/MTES-MCT/codescanalerts-action/actions/workflows/test.yml)

Github action that fetches [Github code-scanning alerts](https://docs.github.com/en/code-security/secure-coding/about-code-scanning) and report results as JSON.

## Usage

First, you need to store your repositories read-only token in repo secrets as `CODESCANALERTS_TOKEN`.

```yaml
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: "MTES-MCT/codescanalerts-action@main"
        with:
          token: ${{ secrets.CODESCANALERTS_TOKEN }}
          repositories: MTES-MCT/action-bidonvilles,MTES-MCT/partaj
          output: codescanalerts.json
          state: open
```

## Hacking

To test locally, install [act](https://github.com/nektos/act). Put secrets `CODESCANALERTS_TOKEN=***` in `.secrets` file.
Launch:

```shell
npm run all
act -j units # unit tests
act -j action # test Github action locally
```
