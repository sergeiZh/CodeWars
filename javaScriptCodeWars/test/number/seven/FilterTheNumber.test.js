const {filterNumber} = require('../../../main/number/seven/FilterTheNumber');

test('Should return just number from the provided string in order of their appearance', () => {
    expect(filterNumber('123')).toEqual(123);
    expect(filterNumber('a1b2c3')).toEqual(123);
    expect(filterNumber('aa1bb2cc3dd')).toEqual(123);
})