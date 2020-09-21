const {squareDigits} = require('../../../main/array/seven/SquareEveryDigit');

test('Function should return square of every digit of provided number', () => {
   expect(squareDigits(5544)).toEqual(25251616);
});