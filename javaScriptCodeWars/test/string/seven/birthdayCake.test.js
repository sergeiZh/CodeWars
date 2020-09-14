const {cake} = require('../../../main/string/seven/birthdayICake')

test('Function work', () => {
    expect(cake(900, 'abcdef')).toEqual('That was close!');
    expect(cake(56, 'ifkhchlhfd')).toEqual('Fire!');
    expect(cake(256, 'aaaaaddddr')).toEqual('Fire!');
})