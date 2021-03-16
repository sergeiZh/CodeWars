const {nthFibo} = require('../../../main/number/six/NthFibonaci');

test('Should return n-th Fibonaci sequence element', () => {
    expect(nthFibo(1)).toEqual(0);
    expect(nthFibo(2)).toEqual(1);
    expect(nthFibo(3)).toEqual(1);
    expect(nthFibo(4)).toEqual(2);
    expect(nthFibo(5)).toEqual(3);
    expect(nthFibo(6)).toEqual(5);
})