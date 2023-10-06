const {arrayPlusArray} = require('../../../main/array/eight/ArrayPlusArray')


test('Summarize all elements of both provided arrays', () => {

    expect(arrayPlusArray([3,3,4], [0,1,2])).toEqual(13);
    expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toEqual(-21);
})