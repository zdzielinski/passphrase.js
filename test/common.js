function passPhraseRegex(separator, length) {

  return new RegExp(`^([\\w-]+\\${separator}){${length-1}}[\\w-]+$`)

}

function runCommonTests(module) {

  test('dist', () => {

    expect(module.genPassPhraseNormal(5, module.effLarge)).toMatch(passPhraseRegex(" ", 5))
    expect(module.genPassPhraseNormal(10, module.effShort1)).toMatch(passPhraseRegex(" ", 10))
    expect(module.genPassPhraseNormal(20, module.effShort2)).toMatch(passPhraseRegex(" ", 20))
    expect(module.genPassPhraseNormal(5, module.effLarge, '.')).toMatch(passPhraseRegex(".", 5))
    expect(module.genPassPhraseNormal(10, module.effShort1, '.')).toMatch(passPhraseRegex(".", 10))
    expect(module.genPassPhraseNormal(20, module.effShort2, '.')).toMatch(passPhraseRegex(".", 20))
    
    expect(module.genPassPhraseCrypto(5, module.effLarge)).toMatch(passPhraseRegex(" ", 5))
    expect(module.genPassPhraseCrypto(10, module.effShort1)).toMatch(passPhraseRegex(" ", 10))
    expect(module.genPassPhraseCrypto(20, module.effShort2)).toMatch(passPhraseRegex(" ", 20))
    expect(module.genPassPhraseCrypto(5, module.effLarge, '.')).toMatch(passPhraseRegex(".", 5))
    expect(module.genPassPhraseCrypto(10, module.effShort1, '.')).toMatch(passPhraseRegex(".", 10))
    expect(module.genPassPhraseCrypto(20, module.effShort2, '.')).toMatch(passPhraseRegex(".", 20))
  
    for (let i = 0; i < 1000; i++) {
  
      let random = Math.floor(Math.random() * 100) + 1
      let regex = passPhraseRegex(" ", random)
      
      expect(module.genPassPhraseNormal(random, module.effLarge)).toMatch(regex)
      expect(module.genPassPhraseNormal(random, module.effShort1)).toMatch(regex)
      expect(module.genPassPhraseNormal(random, module.effShort2)).toMatch(regex)
  
      expect(module.genPassPhraseCrypto(random, module.effLarge)).toMatch(regex)
      expect(module.genPassPhraseCrypto(random, module.effShort1)).toMatch(regex)
      expect(module.genPassPhraseCrypto(random, module.effShort2)).toMatch(regex)
  
    }
  
  })
  

}

module.exports = { runCommonTests }
