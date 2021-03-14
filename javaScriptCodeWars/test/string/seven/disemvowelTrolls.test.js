const {disemvowel} = require('../../../main/string/seven/disemvowelTrolls')

test('Function work', () => {
    expect(disemvowel('Hello world')).toEqual('Hll wrld');
})