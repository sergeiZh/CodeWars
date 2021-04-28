const {partitionOn} = require('../../../main/array/five/PartitionOn');

test('', () => {
    expect(partitionOn((n)=> n % 2 == 0, [1, 2, 3, 4, 5, 6])).toEqual(3);
});