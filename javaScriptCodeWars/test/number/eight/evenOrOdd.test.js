const {even_or_odd} = require('../../../main/number/eight/evenOrOdd')

test('', () => {

    expect(even_or_odd(2)).toBe('Even');
    expect(even_or_odd(0)).toBe('Even');
    expect(even_or_odd(7)).toBe('Odd');
    expect(even_or_odd(1)).toBe('Odd');
});