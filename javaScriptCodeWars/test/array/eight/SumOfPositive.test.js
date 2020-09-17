const {positiveSum} = require('../../../main/array/eight/SumOfPositive');

describe('Function should return summ of all positive array numbers', () => {
   test('Function should only work with positive numbers', () => {
       expect(positiveSum([1,2,3,4,5])).toEqual(15);
       expect(positiveSum([1,-2,3,4,5])).toEqual(13);
   });

    test('Array with all non positive numbers and empty array should not be calculated and return 0', () => {
        expect(positiveSum([-1,-2,-3,-4,-5])).toEqual(0);
        expect(positiveSum([])).toEqual(0);
    });
});
