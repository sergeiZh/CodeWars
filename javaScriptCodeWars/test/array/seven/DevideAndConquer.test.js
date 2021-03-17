const {divCon} = require('../../../main/array/seven/DevideAndConquer');

test('Actual digits should be summed up, stringified digits should be substructed', () => {
    expect(divCon([9, 3, '7', '3'])).toEqual(2);
    expect(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toEqual(14);
    expect(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).toEqual(13);
});