const {getMiddle} = require('../../../main/string/seven/GetMiddleCharacter')

test('For one length string this only character should be returned', () => {
    expect(getMiddle('A')).toEqual('A');
});

test('For string with odd number length middle character should be returned', () => {
    expect(getMiddle('testing')).toEqual('t');
});

test('For string with even number length 2 middle characters should be returned', () => {
    expect(getMiddle('test')).toEqual('es');
    expect(getMiddle('middle')).toEqual('dd');
});