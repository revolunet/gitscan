# 1.0.0

## Chore

- Transfer ownership to [Beta Gouv](https://github.com/betagouv)
- Fixes in `pyproject.toml`:
  - drop deprecated `license` dictionnary in favor of `license-files`
  - drop `build`, `setuptools` and `twine` packages in favor of `uv`
- Release as stable

# 0.0.3

## Fixes

- Dropped eager initialization of importmap on startup that could cause
  conflict when running other commands than `runserver`

# 0.0.2

## Fixes

- Fix `{% importmap %}` not being packaged

# 0.0.1

Initial implementation

## Features

- Source project's `importmaps.py`
- Source project app's `importmaps.py`
- Merge all importmaps into one
- Make importmaps available in views with `importmap` context variable
