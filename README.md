![NPM Version](https://img.shields.io/npm/v/passphrase.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)

# passphrase.js

Passphrase generation for the browser, and your module

![xkcd comic #936, password strength](https://imgs.xkcd.com/comics/password_strength_2x.png)

## API Documentation

Detailed API documentation can be found within the [api](./api) folder

## Usage

### Browser

All browser files are located within the [dist](./dist) folder

You can pick and choose which wordlists to include, or none at all

The primary logic functions exist within the `functions.min.js` file

Corresponding `<file>.min.js.map` files are also provided for debugging

```html
...
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/passphrase.js@latest/dist/effLarge.min.js"
></script>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/passphrase.js@latest/dist/effShort1.min.js"
></script>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/passphrase.js@latest/dist/effShort2.min.js"
></script>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/passphrase.js@latest/dist/functions.min.js"
></script>
<script type="text/javascript">
  console.log(passphrase.genPassPhraseNormal(4, passphrase.effLarge));
  // > busybody squabble agonizing armhole
  console.log(passphrase.genPassPhraseCrypto(4, passphrase.effShort1));
  // > card ruby stood union
</script>
...
```

#### CDN

We leverage [jsDelivr](https://www.google.com/search?q=jsdeliver) for CDN hosting

You can either point to the `latest` version, or a `tagged` version, as shown below

```
https://cdn.jsdelivr.net/npm/passphrase.js@latest/dist/functions.min.js
https://cdn.jsdelivr.net/npm/passphrase.js@<release_version>/dist/functions.min.js
```

The latest tagged versions can be found on our [NPM package page](https://www.npmjs.com/package/passphrase.js?activeTab=versions)

### NodeJS

This module can be used within nodejs, it supports commonjs for now

```bash
npm install passphrase.js
```

```js
const passphrase = require("passphrase.js");
console.log(passphrase.genPassPhraseNormal(4, passphrase.effLarge));
// > dangle raft failing say
console.log(passphrase.genPassPhraseCrypto(4, passphrase.effShort1));
// > copy suds watch bolt
```

## Notes

- Some of the EFF words contain a `-` within them, keep this in mind if you use that as a separator

## License

[The MIT License](./LICENSE.md)
