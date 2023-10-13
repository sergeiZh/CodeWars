const {countPositivesSumNegatives} = require('../../../src/array/eight/sumOfPositiveAndNegative');


test("Returns array with 2 elements", ()=> {
    expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toEqual([10, -65]);
    expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toEqual([8, -50]);
});

test("Returns empty array", () => {
    expect(countPositivesSumNegatives(null)).toEqual([]);
    expect(countPositivesSumNegatives([])).toEqual([]);
})