const {arrayPlusArray} = require('../../../src/array/eight/arrayPlusArray')

test("Test array plus array", () => {
    expect(arrayPlusArray([3, 3, 4], [3, 3, 4])).toEqual(20);
    expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toEqual(-21);
    expect(arrayPlusArray([-1, -2, -3, -4], [10])).toEqual(0);
})