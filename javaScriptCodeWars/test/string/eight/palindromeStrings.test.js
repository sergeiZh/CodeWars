const {isPalindrome} = require('../../../main/string/eight/palindromeStrings')

test('If provided word can be read left to right equally to right to left test should return true', () => {
    expect(isPalindrome('anna')).toEqual(true);
    expect(isPalindrome('hello')).toEqual(false);
    expect(isPalindrome(123321)).toEqual(true);
    expect(isPalindrome('.')).toEqual(true);
})