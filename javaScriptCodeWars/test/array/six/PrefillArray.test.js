const {prefill} = require('../../../main/array/six/PrefillArray');

test('Should return an array with first parameter as elements amount and' +
         'all values the same - second parameter', ()=> {
    expect(prefill(3, 1)).toEqual([1,1,1]);
    expect(prefill(2, 'abc')).toEqual(['abc','abc']);
    expect(prefill('1', 1)).toEqual([1]);
    expect(prefill(3, prefill(2,'2d'))).toEqual([['2d','2d'],['2d','2d'],['2d','2d']]);
});

test('Should throw TypeError when first parameter is invalid', ()=> {
    expect(() => {prefill('xyz', 1)}).toThrowError(TypeError);
    expect(() => {prefill(-1, 1)}).toThrowError(TypeError);
    expect(() => {prefill(Infinity, undefined)}).toThrowError(TypeError);
    expect(() => {prefill(-Infinity, undefined)}).toThrowError(TypeError);
    expect(() => {prefill(3.849966718678157, undefined)}).toThrowError(TypeError);
    expect(() => {prefill(true, undefined)}).toThrowError(TypeError);
    expect(() => {prefill(false, undefined)}).toThrowError(TypeError);
});

test('Should return array with elements as undefined in case second parameter is absent', ()=> {
    expect(prefill(3)).toEqual([undefined, undefined, undefined]);
});

test('Should return array with elements as undefined in case second parameter is absent', ()=> {
    expect(prefill('0', 1)).toEqual([]);
});



