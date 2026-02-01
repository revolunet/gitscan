# socialgouv/detect-404-action

Detect 404 on some URL and report results as JSON

## Usage

```yaml
jobs:
  scans:
    steps:
      - uses: "socialgouv/detect-404-action@master"
        with:
          url: https://some.url
```
