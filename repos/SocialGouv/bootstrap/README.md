# design

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/926752b8d6b5412c95ae4c25bfe2dde5)](https://app.codacy.com/app/douglasduteil/bootstrap?utm_source=github.com&utm_medium=referral&utm_content=SocialGouv/bootstrap&utm_campaign=Badge_Grade_Dashboard)

The Social Gouv Bootstrap monorepo

See documentation : https://socialgouv.github.io/bootstrap/master/docs/

## Usage

```html
<link
  rel="stylesheet"
  href="https://socialgouv.github.io/bootstrap/master/@socialgouv/bootstrap.core/dist/socialgouv-bootstrap.min.css"
/>
```

## Dev

```sh
$ yarn workspace docs nps serve
$ yarn workspace @socialgouv/bootstrap.core serve
```


## Release policy

### Auto

Trigger a custom build on [Travis](https://travis-ci.com/SocialGouv/bootstrap) (in the "More options" right menu) on the `master` branch with a custom config:

```yml
env:
  global:
    - RELEASE=true
```

You can change the lerna arguments though the `LERNA_ARGS` variable.

```yml
env:
  global:
    - LERNA_ARGS="--force-publish --yes"
    - RELEASE=true
```

### Manual

You need an [Github token](https://github.com/settings/tokens/new) to release.

```sh
#
# Bump, push to git and publish to npm
$ yarn lerna version

#
# Publish the tag change log on the Github Release
$ CONVENTIONAL_GITHUB_RELEASER_TOKEN==************ npx conventional-github-releaser -p angular

#
# You might want to add a Gif to your release to make it groovy ;)
```
