# reference-article

Librairie d'identification des références aux articles de loi dans du texte brut.

## Usage

```js
const text =
  "les modalités fixées par les articles L. 2313‑8 et R. 2313-3 à R. 2313-6 du code du travail ainsi que le L. 1251-18";

// const tokens = talisman.treebank(text)
const tokens = text.split(" ");

// identify tokens, returns a list of predictions
const predictions = classifyTokens(tokens);

//predictions
[
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "B-ART",
  "B-ART",
  "O",
  "B-ART",
  "B-ART",
  "B-ART",
  "B-ART",
  "B-ART",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "B-ART",
  "B-ART",
];

// format results and resolve code reference
const references = extractReferences(tokens);

//references
[
  ({
    text: "L. 2313‑8",
    code: { name: "code du travail", id: "LEGITEXT000006072050" },
  },
  {
    text: "R. 2313-3 à R. 2313-6",
    code: { name: "code du travail", id: "LEGITEXT000006072050" },
  },
  { text: "L. 1251-18", code: undefined }),
];
```

## Test

`yarn jest`
