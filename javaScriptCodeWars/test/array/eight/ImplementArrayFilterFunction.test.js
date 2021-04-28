const {filter} = require('../../../main/array/eight/ImplementArrayFilterFunction');

test('Should override native filter function of array object', () => {
    Array.prototype.filter = filter;
    expect([1,2,3,4].filter((num)=>{ return num > 3})).toEqual([4]);
});