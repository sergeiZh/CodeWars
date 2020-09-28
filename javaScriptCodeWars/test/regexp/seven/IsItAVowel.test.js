const {vowel} = require('../../../main/regexp/seven/IsItAVowel');

describe('Provided letter should be vowel', () => {
    test('In case of correct letter function should return true', () => {
        expect(vowel('a')).toBeTruthy();
        expect(vowel('E')).toBeTruthy();
    });

    test('Function should return false in case of unexpected input', () => {
        expect(vowel('')).toBeFalsy();
        expect(vowel('ou')).toBeFalsy();
        expect(vowel('z')).toBeFalsy();
        expect(vowel('lol')).toBeFalsy();
    });
});