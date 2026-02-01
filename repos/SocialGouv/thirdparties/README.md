# thirdparties

A flat list of known third-party scripts or trackers and remediations.

## Usage

```js
const { trackers, find } = require("@socialgouv/thirdparties");

// list of known trackers
console.log(trackers);

// check if some URL found in our collection
console.log(find("https://path/to/some/script"));
```

