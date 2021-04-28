const {sequence} = require('../../../main/array/seven/SequenceGenerator');

test('Should return an array of provided amount of elements', () => {
    expect(sequence(3, 4)).toEqual([4, 4, 4]);
    expect(sequence(3, 's')).toEqual(['s', 's', 's']);
    expect(sequence(5, [])).toEqual([[], [], [], [], []]);
    expect(sequence(5, (x, idx) => idx%2)).toEqual([0, 1, 0, 1, 0]);
});
