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

/**
 * Generate a passphrase in a non cryptographically secure way
 *
 * Uses Math.random for random number generation
 *
 * @param {number} length The length of the passphrase (in words)
 * @param {Array} words The list of words to use for generation
 * @param {string} separator The separator to use
 *
 * @returns {string} The generated passphrase
 */
function genPassPhraseNormal(length, words, separator = " ") {
  return _genPassPhrase(length, words, separator, _getRandArrElemNormal);
}

/**
 * Generate a passphrase in a cryptographically secure way
 *
 * Uses crypto.getRandomValues for random number generation
 *
 * @param {number} length The length of the passphrase (in words)
 * @param {Array} words The list of words to use for generation
 * @param {string} separator The separator to use
 *
 * @returns {string} The generated passphrase
 */
function genPassPhraseCrypto(length, words, separator = " ") {
  return _genPassPhrase(length, words, separator, _getRandArrElemCrypto);
}

module.exports = { genPassPhraseNormal, genPassPhraseCrypto };
