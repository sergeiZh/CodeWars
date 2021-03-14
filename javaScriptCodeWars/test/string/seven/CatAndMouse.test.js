const {catMouse} = require('../../../main/string/seven/CatAndMouse');

test('Should return boring without two animals message in case C or m sign is absent', () => {
    expect(catMouse(`.........\n.........\n....m....`, 5)).toEqual('boring without two animals');
});

test('Should return Caught! when path from C to m is less or equal provided number of steps', () => {
    expect(catMouse(`..C......\n.........\n....m....`, 5)).toEqual('Caught!');
});

test('Should return Escaped! when path from C to m is more then provided number of steps', () => {
    expect(catMouse(`.C.......\n.........\n......m..`, 5)).toEqual('Escaped!');
});