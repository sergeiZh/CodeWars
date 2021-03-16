const {inter} = require('../../../main/array/seven/SetsIntersection');

test('Should return Set with intersected values ', () => {
    expect(inter(new Set([1, 2]), new Set([2, 3]))).toEqual(new Set([2]));
    expect(inter(new Set([1, 2, 3]), new Set([2, 3]))).toEqual(new Set([2, 3]));
});