const passphrase = require("../index.js");

console.log(passphrase.genPassPhraseNormal(4, passphrase.effLarge));
console.log(passphrase.genPassPhraseCrypto(4, passphrase.effShort1));
