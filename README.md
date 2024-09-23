# passphrase.js

Passphrase generation for the browser, and your module

## Overview

TODO

## Usage

Example browser usage:

```html
<script type="text/javascript" src="todo.com"></script>
<script type="text/javascript" src="todo.com"></script>
<script type="text/javascript" src="todo.com"></script>
<script type="text/javascript" src="todo.com"></script>
```

Example nodejs usage:

```js
const passphrase = require("../todo")

console.log(passphrase.genPassPhraseNormal(4, passphrase.effLarge))
console.log(passphrase.genPassPhraseCrypto(4, passphrase.effShort1))
```

NOTE - Some of the EFF words contain a `-` within them

## License

[The MIT License](./LICENSE)
