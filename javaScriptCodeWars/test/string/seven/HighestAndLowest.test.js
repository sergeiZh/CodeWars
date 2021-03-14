const {highAndLow} = require('../../../main/string/seven/HighestAndLowest')

test('', () => {
    expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toEqual('542 -214');
})