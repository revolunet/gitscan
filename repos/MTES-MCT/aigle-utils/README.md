# Aigle utils

This repo regroup every scripts that are external to the app repos [aigle-api](https://github.com/MTES-MCT/aigle-api) and [aigle-frontend](https://github.com/MTES-MCT/aigle-frontend)

## SQL Scripts

There is a pre-commit hook that can be used by installing locally `pgFormatter`:
```
# debian / ubuntu
sudo apt-get install pgformatter

# macOs
brew install pgformatter
```

You can run `pg_format` manually on all sql scripts by running:
```
find sql_scripts -name "*.sql" -exec pg_format -i {} \;
```
