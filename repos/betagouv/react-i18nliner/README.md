# react-i18nliner

[<img src="https://travis-ci.org/jenseng/react-i18nliner.svg" />](http://travis-ci.org/jenseng/react-i18nliner)

react-i18nliner brings [I18nliner](https://github.com/jenseng/i18nliner-js)
to React via the [html `translate` attribute](http://www.w3.org/International/questions/qa-translate-flag). I18n doesn't get any easier than this.

## TL;DR

react-i18nliner lets you do this:

```html
<p translate="yes">
  Hey {this.props.user.name}!
  Although I am <Link to="route">linking to something</Link> and
  have some <strong>bold text</strong>, the translators will see
  <strong><em>absolutely no markup</em></strong> and will only have a
  single string to translate :o
</p>
```

Write your components as you normally would, and just put a
`translate="yes"` attribute on any element/component that needs to be
localized. Seriously.

And because the default translation is inline, it will be used as a
fallback if a translation is missing or hasn't happened yet.

Best of all, you don't need to maintain separate translation files
anymore; I18nliner will do it for you.

## How does it work?

react-i18nliner [preprocesses](https://github.com/jenseng/react-i18nliner/blob/master/preprocess.js)
your JSX, transforming it into something truly localizable. It infers
[placeholders for expressions](https://github.com/jenseng/react-i18nliner/blob/57f813bc3ef6769be7aab47eb42fd4d081e1a498/__tests__/preprocess.test.js#L21)
and [wrappers for elements/components](https://github.com/jenseng/react-i18nliner/blob/57f813bc3ef6769be7aab47eb42fd4d081e1a498/__tests__/preprocess.test.js#L17),
and separates the localizable string. [At runtime](https://github.com/jenseng/react-i18nliner/blob/master/ComponentInterpolator.js),
it localizes the string, interpolating the [wrappers](https://github.com/jenseng/react-i18nliner/blob/57f813bc3ef6769be7aab47eb42fd4d081e1a498/__tests__/ComponentInterpolator.test.js#L28)
and [placeholders](https://github.com/jenseng/react-i18nliner/blob/57f813bc3ef6769be7aab47eb42fd4d081e1a498/__tests__/ComponentInterpolator.test.js#L42) into the correct locations.

Localizable strings are detected both from the text nodes, as well as from [translatable attributes](http://www.w3.org/TR/html5/dom.html#the-translate-attribute) within the `translate="yes"` element.

react-i18nliner enhances I18nliner, so that it can extract any of these
`translate="yes"` strings from your codebase (in addition to regular
`I18n.t` calls). Once you get everything translated, just stick it on
`I18n.translations` and everything will Just Work™.

## Examples

### Placeholders

A placeholder will be created for the input:

```html
<label translate="yes">
  Create <input /> new accounts
</label>
```

As well as for arbitrary JSX expressions:

```html
<div translate="yes">
  Welcome back, {user.name}.
</div>
```

By default, placeholder keys will be inferred from the content, so a
translator would see `"Create %{input} keys"` and `"Welcome back,
%{user_name}"`. For complicated expressions, these placeholder keys can
get a bit long/gnarly. Having to retranslate strings that "changed" just
because you refactored some code is terrible, so you can use keys to
be a bit more explicit:

```html
<label translate="yes">
  Create <input key="numAccounts" onChange={this.addAccounts} /> new
  accounts
</label>
```

In this case the extracted string would just be `"Create %{num_accounts}
new accounts"`

### Wrappers

Translators won't see any components or markup; they will be replaced with
a simple wrapper notation. In this example, the extracted string would be
`"That is *not* the right answer"`:

```html
<div translate="yes">
  That is <b>not</b> the right answer
</div>
```

### Attributes

In addition to the `"Edit your settings *here*"` string, the
`"Your Account"` will also be preprocessed, since it is a valid
[translatable attribute](http://www.w3.org/TR/html5/dom.html#the-translate-attribute)
within a translated element.

```html
<div translate="yes">
  Edit your settings <a href="/foo" title="Your Account">here</a>
</div>
```

## Installation

### 1. get i18n-js and i18nliner

Get i18n-js and i18nliner installed [per these instructions](https://github.com/jenseng/i18nliner-js#installation).

### 2. add react-i18nliner

```bash
npm install react-i18nliner --save
```

And make sure your `.i18nrc` file has:

```json
{
  "plugins": [
    "react-i18nliner"
  ]
}
```

This will ensure that when you export strings for translation, all of your
new `translate="yes"` stuff will get picked up.

### 3. preprocess all your js files with react-i18nliner

How you hook up the preprocessor will depend on how you bundle your assets:

#### webpack

Add [this loader](https://github.com/jenseng/react-i18nliner/blob/master/webpack-loader.js)
to your config, e.g.

```js
{
  module: {
    loaders: [
      { test: /\.js$/, loader: "react-i18nliner/webpack-loader" }
      ...
    ],
  },
  ...
}
```

Check out [this example app](https://github.com/jenseng/react-i18nliner/tree/master/examples/webpack)
to see how everything is wired together.

#### browserify

Use [this transform](https://github.com/jenseng/react-i18nliner/blob/master/browserify-transform.js),
e.g.

```bash
$ browserify -t react-i18nliner/browserify-transform app.js > bundle.js
```

#### something else?

It's not too hard to roll your own; as you can see in the loader and
transform above, the heavy lifting is done by `preprocess`. So whether
you use ember-cli, sprockets, grunt concat, etc., it's relatively
painless to add a little glue code that runs preprocess on each
source file.

### 4. add the react-i18nliner runtime extensions to i18n-js

Assuming you have a cjs-style app, do something like this:

```js
var I18n = require("./path/to/cjs'd/i18n");
require("i18nliner/dist/lib/extensions/i18n_js")(I18n);
require("react-i18nliner/dist/extensions/i18n_js")(I18n);
```

If you're using AMD/`<script>`/something else, see the [i18nliner-js README](https://github.com/jenseng/i18nliner-js#installation)
for hints; these extensions can be set up exactly the same way as
i18nliner-js's.

## Working with translations

Since react-i18nliner is just an i18nliner plugin, you can use the
i18nliner bin / grunt task to extract translations from your codebase;
it will pick up normal `I18n.t` usage, as well as your new
`translate="yes"` components.

Once you've gotten all your translations back from the translators,
simply stick them the giant blob 'o json on `I18n.translations`; it
expects the translations to be of the format:

```js
I18n.translations = {
  "en": {
    "some_key": "Hello World",
    "another_key": "What's up?"
  }
  "es": {
    "some_key": "Hola mundo",
    "another_key": "¿Qué tal?"
  },
  ...
}
```

## Configuration / Advanced Settings

If you have certain tags that you always want to translate (e.g. `<h1>`),
you can specify them in your `.i18nrc` via `autoTranslateTags`, e.g.

```js
{
  "autoTranslateTags": ["h1", "h2", "h3", "h4", "h5", "h6", "p"]
}
```

These tags will have an implicit `translate="yes"`, keeping your markup
simple.

Note that this works for both regular HTML elements, as well as for your
own custom components. For example, if you decided you wanted to use a
`<T>` component everywhere instead of `translate="yes"`, you could add it
to autoTranslateTags, and its runtime implementation could be as simple
as:

```js
const T = React.createClass({
  render() {
    return <span {...this.props} />;
  }
})
```

Similarly, if you have certain tags you **don't** want to auto-translate
(e.g. `<code>`), you can specify those in a similar manner:

```js
{
  "neverTranslateTags": ["code"],
}
```

Then if those are ever nested in a larger translatable element, they
will be assumed to be untranslatable, and a placeholder will be created
for them.

## Gotchas

### What about pluralization? Or gender?

i18nliner does support basic pluralization (via i18n-js), but you need
to use pure js for that, e.g.

```html
<div>
  {I18n.t({one: "You have 1 item", other: "You have %{count} items"}, {count: theCount})}
</div>
```

i18n-js doesn't support gender-based localizations, but I do plan on
making i18nliner work with other backends soon (e.g. i18next, FormatJS).
Watch this space, or better yet, create a pull request ;)

### Every JSX expression makes a placeholder

This kind of gets to a general rule of i18n: don't concatenate strings. For example,

```js
return (<b translate="yes">
         You are {this.props.isAuthorized ? "authorized" : "NOT authorized"}
        </b>);
```

The extracted string will be `"You are %{opaque_placeholder}"` and the
translators won't get a chance to translate the two inner strings (much
less without context). So don't do that; whenever you have logically
different sentences/phrases, internationalize them separately, e.g.

```js
return (this.props.isAuthorized ?
         <b translate="yes">You are authorized</b> :
         <b translate="yes">You are NOT authorized</b>);
```

**NOTE:** in a subsequent release of react-i18nliner, the former example
will cause an `i18nliner:check` failure. You've been warned :)

### Cloning this project under Windows

This project's eslint settings force a check on the use of linefeed characters 
that will fail when the project is cloned with the git 
[core.autocrlf](https://git-scm.com/book/tr/v2/Customizing-Git-Git-Configuration) 
setting set to `true`, which is the default on Windows. So make sure to change 
that setting beforehand. The easiest way to do this is probably to `git init` a new
repo for this project and change the setting, and only then add this repo as a
remote and pull from it.

## Related Projects

* [i18nliner (ruby)](https://github.com/jenseng/i18nliner)
* [i18nliner-js](https://github.com/jenseng/i18nliner-js)
* [i18nliner-handlebars](https://github.com/fivetanley/i18nliner-handlebars)

## License

Copyright (c) 2015 Jon Jensen, released under the MIT license
