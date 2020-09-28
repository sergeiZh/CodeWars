const {isLetter} = require('../../../main/regexp/seven/IsItALetter');

describe('Provided letter should be lattin', () => {
   test('In case of correct letter function should return true', () => {
      expect(isLetter('a')).toBeTruthy();
      expect(isLetter('X')).toBeTruthy();
   });

   test('Function should return false in case of unexpected input', () => {
      expect(isLetter('')).toBeFalsy();
      expect(isLetter('7')).toBeFalsy();
      expect(isLetter('*')).toBeFalsy();
      expect(isLetter('ab')).toBeFalsy();
      expect(isLetter('a\n')).toBeFalsy();
   });
});