const {duplicateEncode} = require('../../../main/string/seven/DuplicateEncoder');

test('Shoud return ( for non-duplicated letters in a word and ) for duplicated', () => {
    expect(duplicateEncode('din')).toEqual('(((');
    expect(duplicateEncode('recede')).toEqual('()()()');
    expect(duplicateEncode('Success')).toEqual(')())())');
    expect(duplicateEncode('(( @')).toEqual('))((');
})