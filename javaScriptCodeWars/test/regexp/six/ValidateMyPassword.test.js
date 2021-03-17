const {validPass} = require('../../../main/regexp/six/ValidateMyPassword');

test('Should return VALID in case provided password is valid', () => {
    expect(validPass('Username123')).toEqual('VALID');
    expect(validPass('1Username')).toEqual('VALID');
});

test('Should return INVALID in case provided password is invalid', () => {
    expect(validPass('Username')).toEqual('INVALID');
    expect(validPass('123')).toEqual('INVALID');
    expect(validPass('a12')).toEqual('INVALID');
    expect(validPass('Username123!')).toEqual('INVALID');
    expect(validPass('ThisPasswordIsTooLong1234')).toEqual('INVALID');
});
