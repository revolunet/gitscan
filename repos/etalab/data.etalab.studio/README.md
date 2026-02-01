# ⧊

This a [Lektor](https://www.getlektor.com/docs/) proof of concept for on open data static portal.

Lektor lets you build a static website while retaining some CMS features (content models and backoffice).

Included:
- `dataset` model with [Flow](https://www.getlektor.com/docs/content/flow/) blocks for APIs and resources description
- import script from data.gouv.fr
- some dummy templates and stock styles

## Getting started

```bash
pip install lektor
lektor server
```

Import some datasets from data.gouv.fr:

```bash
python scripts/import.py
```
