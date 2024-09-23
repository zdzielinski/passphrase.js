# passphrase.js

Passphrase generation for the browser (and your module), with EFF wordlists included

## Usage

Example browser usage:

```html
<script type="text/javascript" src="foo.com"></script>
<script type="text/javascript" src="foo.com"></script>
<script type="text/javascript" src="foo.com"></script>
<script type="text/javascript" src="foo.com"></script>
```

Example nodejs usage:

```js
const passphrase = require("../index.js")

console.log(passphrase.genPassPhraseNormal(4, passphrase.effLarge))
console.log(passphrase.genPassPhraseCrypto(4, passphrase.effShort1))
```

NOTE - Some of the EFF words contain a `-` within them
