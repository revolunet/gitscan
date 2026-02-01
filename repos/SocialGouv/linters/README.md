<h1 align="center">
  <img src="https://github.com/SocialGouv/linters/raw/master/.github/linter_logo.svg?sanitize=true" width="250"/>
  <p align="center">Linters</p>
  <p align="center" style="font-size: 0.5em">🧹The Social Gouv linters✨</p>
</h1>

<p align="center">
  <a href="https://github.com/SocialGouv/linters/actions/"><img src="https://github.com/SocialGouv/linters/workflows/ci/badge.svg" alt="Github Master CI Build Status"></a>
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" alt="License: Apache-2.0"></a>
  <a href="https://www.npmjs.com/package/@socialgouv/eslint-config-recommended"><img src="https://img.shields.io/npm/v/@socialgouv/eslint-config-recommended.svg" alt="Npm version"></a> 
</p>

<br>
<br>
<br>
<br>

## Packages

| Project                       | Package                                                    | Version                                        | Links                                        |
| ----------------------------- | ---------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------- |
| **eslint-config-react**       | [`@socialgouv/eslint-config-react`][link-npm-react]        | [![latest][img-npm-react]][link-npm-react]     | [![README][img-readme]][link-readme-react]   |
| **eslint-config-recommended** | [`@socialgouv/eslint-config-reco`][link-npm-reco]          | [![latest][img-npm-reco]][link-npm-reco]       | [![README][img-readme]][link-readme-reco]    |
| **eslint-config-typescript**  | [`@socialgouv/eslint-config-typescript`][link-npm-ts-reco] | [![latest][img-npm-ts-reco]][link-npm-ts-reco] | [![README][img-readme]][link-readme-ts-reco] |

<br>
<br>
<br>
<br>

## Usage

Each linter has its own REAME _(see links above)_.
As described in [`eslint-config-recommended` README](https://github.com/SocialGouv/linters/blob/master/packages/eslint-config-recommended/README.md#usage), you can install the config with :

```sh
$ npm install -D @socialgouv/eslint-config-recommended eslint prettier
# or
$ yarn add -D @socialgouv/eslint-config-recommended eslint prettier
```

You can either:

- add this to your `.eslintrc.yml` file:

  ```yaml
  extends:
    - "@socialgouv/eslint-config-recommended"
  ```

- or add this to your `.eslintrc.json` file:

  ```json
  {
    "extends": ["@socialgouv/eslint-config-recommended"]
  }
  ```

- or add this to your `package.json` file:

  ```json
  {
    "eslintConfig": {
      "extends": ["@socialgouv/eslint-config-recommended"]
    }
  }
  ```

And enjoy it!

<br>
<br>
<br>
<br>

## Release policy

### Auto

Trigger a custom build on [Travis](https://travis-ci.com/SocialGouv/linters) (in the "More options" right menu) on the `master` branch with a custom config:

```yml
env:
  global:
    - RELEASE=true
```

### Manual

You need an [Github token](https://github.com/settings/tokens/new) to release.

```sh
#
# Bump, push to git and publish to npm
$ yarn lerna publish

#
# Publish the tag change log on the Github Release
$ CONVENTIONAL_GITHUB_RELEASER_TOKEN==************ npx conventional-github-releaser -p angular

#
# You might want to add a Gif to your release to make it groovy ;)
```

---

[img-npm-react]: https://img.shields.io/npm/v/@socialgouv/eslint-config-react/latest.svg
[img-npm-reco]: https://img.shields.io/npm/v/@socialgouv/eslint-config-recommended/latest.svg
[img-npm-ts-reco]: https://img.shields.io/npm/v/@socialgouv/eslint-config-typescript/latest.svg
[img-readme]: https://img.shields.io/badge/README--green.svg
[link-npm-react]: https://npmjs.com/package/@socialgouv/eslint-config-react
[link-npm-reco]: https://npmjs.com/package/@socialgouv/eslint-config-recommended
[link-npm-ts-reco]: https://npmjs.com/package/@socialgouv/eslint-config-typescript
[link-readme-react]: https://github.com/SocialGouv/linters/blob/master/packages/eslint-config-react/README.md
[link-readme-reco]: https://github.com/SocialGouv/linters/blob/master/packages/eslint-config-recommended/README.md
[link-readme-ts-reco]: https://github.com/SocialGouv/linters/blob/master/packages/eslint-config-typescript/README.md

