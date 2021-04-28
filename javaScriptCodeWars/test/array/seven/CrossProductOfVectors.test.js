const {crossProduct} = require('../../../main/array/seven/CrossProductOfVectors');

test('Should calculate cross products for provided array - happy path', () => {
    expect(crossProduct([1,0,0], [0,1,0])).toEqual([0,0,1]);
    expect(crossProduct([3,2,1], [1,2,3])).toEqual([4,-8,4]);
});

test('Should throw an error when one of provided arrays is not valid or has lenght length not equal 3', () => {
    expect(() => {return crossProduct("Expected error was not thrown", crossProduct)})
        .toThrow('Arguments are not 3D vectors!');
    expect(() => {return crossProduct([1,2], [5,4])}).toThrow('Arguments are not 3D vectors!');
    expect(() => {return crossProduct([1,2,3,4,5], [5,4,3,2,1])}).toThrow('Arguments are not 3D vectors!');

});

test('Should return null in case provided arrays are null', () => {
    expect(crossProduct([6,6,6], null)).toBeNull();
    expect(crossProduct(null, null)).toBeNull();
});