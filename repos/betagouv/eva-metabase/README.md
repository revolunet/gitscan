This dépot is the eva fork of the official metabase depot from scalingo.

The only difference is the readme file that we updated to indicate upgrade
procedures here after.

Here is the [original README](original_readme.md).

## Configuration
```bash
$ scalingo --app eva-metabase git-setup
$ git remote rename scalingo deploy
$ git remote add scalingo_origin git@github.com:Scalingo/metabase-scalingo.git
```

## To update metabase

```bash
$ git commit --allow-empty -m "Upgrading"
$ git push -f deploy master
$ git push
```

## Deploying after updating from original scalingo depot

```bash
$ git pull scalingo_origin --rebase=false master
$ git push deploy master
$ git push
```
