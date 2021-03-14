const {calc} = require('../../../main/string/seven/CharCodeCalculation');

test('Should calculate substraction of calculated values', () => {
    expect(calc('ABC')).toEqual(6);
    expect(calc('abcdef')).toEqual(6);
    expect(calc('ifkhchlhfd')).toEqual(6);
    expect(calc('aaaaaddddr')).toEqual(30);
    expect(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toEqual(96);
})