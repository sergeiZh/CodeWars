const {basicOp} = require('../../../main/number/eight/BasicMathematicalOperations');

describe('Function should do mathematical operations according to provided parameter', () => {

    test('Function should be able to add numbers for + sign', () => {
        expect(basicOp('+', 7, 4)).toEqual(11);
    });

    test('Function should be able to subtract numbers for - sign', () => {
        expect(basicOp('-', 7, 4)).toEqual(3);
    });

    test('Function should be able to multiply numbers for * sign', () => {
        expect(basicOp('*', 7, 4)).toEqual(28);
    });

    test('Function should be able to divide numbers for / sign', () => {
        expect(basicOp('/', 15, 3)).toEqual(5);
    });
});