const {opposite} = require('../../../main/number/eight/OppositeNumber');

describe('Function should return number opposite entered one', () => {

    test('Negative number should be converted to positive', () => {
       expect(opposite(-3)).toEqual(3);
    });

    test('Positive number should be converted to negative', () => {
       expect(opposite(10)).toEqual(-10);
    });

    test('Zero should stay zero even after processing', () => {
        expect(opposite(0)).toEqual(0);
    });

});