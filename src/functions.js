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

/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function genPassPhraseNormal(length, words, separator = defaultSeparator) {
  return _genPassPhrase(length, words, separator, _getRandArrElemNormal);
}

/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function genPassPhraseCrypto(length, words, separator = defaultSeparator) {
  return _genPassPhrase(length, words, separator, _getRandArrElemCrypto);
}

module.exports = { genPassPhraseNormal, genPassPhraseCrypto };
