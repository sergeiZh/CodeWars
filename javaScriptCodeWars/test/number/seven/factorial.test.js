const {factorial} = require('../../../main/number/seven/factorial');

describe('Function calculates factorial of provided number', () => {
   test('Factorial of number should be calculated properly', () => {
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
   });

   test('Factorial of 0 is 1', () => {
      expect(factorial(0)).toBe(1);
   });

   test('Error must be thrown when provided number less than 0 and greater than 12', () => {
      // from the official Jest documentation https://jestjs.io/docs/en/expect#tothrowerror
       //  must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
      expect(() => {factorial(13)}).toThrowError(RangeError);
      expect(() => {factorial(-1)}).toThrowError(RangeError);
   });
});

