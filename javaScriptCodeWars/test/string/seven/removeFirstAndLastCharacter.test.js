const {removeChar} = require('../../../main/string/eight/removeFirstAndLastCharacter')

test('Function should remove first and last character of the provided word', () => {
    expect(removeChar('barakuda')).toEqual('arakud');
})