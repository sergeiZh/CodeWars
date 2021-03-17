const {squares} = require('../../../main/number/seven/SquaresSequence');

test('Squares should return sequence of a multiplication in pow 2 of the previous array element. For example' +
         'for base number 2 and pow value 5, first element should be 2, then 2*2 = 4, then 4*4=16 etc.', () => {
    expect(squares(2, 5)).toEqual([2,4,16,256,65536]);
    expect(squares(3, 3)).toEqual([3,9,81]);
    expect(squares(5, 3)).toEqual([5,25,625]);
    expect(squares(10, 4)).toEqual([10,100,10000,100000000]);
    expect(squares(0, 9)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('Squares should return empty array in case one of provided values is 0 or less', () => {
    expect(squares(2, 0)).toEqual([]);
    expect(squares(-3, 3)).toEqual([]);
})