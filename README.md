# passphrase.js

Passphrase generation for the browser, and your module

## Documentation

Detailed documentation can be found within the [docs](./docs) folder

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
  console.log(passphrase.genPassPhraseCrypto(4, passphrase.effShort1));
</script>
...
```

### NodeJS

This module can be used within nodejs, it supports commonjs for now

```js
const passphrase = require("../todo");
console.log(passphrase.genPassPhraseNormal(4, passphrase.effLarge));
console.log(passphrase.genPassPhraseCrypto(4, passphrase.effShort1));
```

## Notes

- Some of the EFF words contain a `-` within them
  - Keep this in mind if you use `-` as a separator

## License

[The MIT License](./LICENSE)
