const {multiplyAll} = require('../../../main/array/seven/CurryingFunctionsMultiplyArrayElements');

test ('must return an array', function () {
    expect(Array.isArray(multiplyAll([1])(1))).toBe(true);
});

test ('array has correct length', function () {
    expect(multiplyAll([1, 2])(1).length).toBe(2);
});

test ('returned array has correct values', function () {
    expect(multiplyAll([1, 2, 3])(1)).toEqual( [1, 2, 3]);
    expect(multiplyAll([1, 2, 3])(2)).toEqual( [2, 4, 6]);
    expect(multiplyAll([1, 2, 3])(0)).toEqual( [0, 0, 0]);
    expect(multiplyAll([])(10)).toEqual( []);
});