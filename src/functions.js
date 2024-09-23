function _getRandArrElemNormal(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function _getRandArrElemCrypto(a) {
  return a[
    ((crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32) * a.length) | 0
  ];
}

function _genPassPhrase(length, words, separator, getRandArrElem) {
  let passPhrase = "";

  for (let i = 0; i < length; i++) {
    passPhrase += getRandArrElem(words) + separator;
  }

  return passPhrase.slice(0, -separator.length);
}

const defaultSeparator = " ";

function genPassPhraseNormal(length, words, separator = defaultSeparator) {
  return _genPassPhrase(length, words, separator, _getRandArrElemNormal);
}

function genPassPhraseCrypto(length, words, separator = defaultSeparator) {
  return _genPassPhrase(length, words, separator, _getRandArrElemCrypto);
}

module.exports = { genPassPhraseNormal, genPassPhraseCrypto };
