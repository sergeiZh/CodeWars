const {factorial} = require('../../../main/number/seven/factorial');

test('', () => {
   expect(factorial(0)).toBe(1);
   expect(factorial(1)).toBe(1);
   expect(factorial(5)).toBe(120);

   // from the official Jest documentation https://jestjs.io/docs/en/expect#tothrowerror
    //  must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
   expect(() => {factorial(20)}).toThrowError(RangeError);
});

