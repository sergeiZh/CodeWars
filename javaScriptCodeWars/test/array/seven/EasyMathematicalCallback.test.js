const {processArray} = require('../../../main/array/seven/EasyMathematicalCallback');

test('', () => {
   expect(processArray([1, 2, 3, 4], (number) => number * 2)).toEqual([2, 4, 6, 8]);
   expect(processArray([1, 2, 3, 4], (number) => number + 2)).toEqual([3, 4, 5, 6]);
});