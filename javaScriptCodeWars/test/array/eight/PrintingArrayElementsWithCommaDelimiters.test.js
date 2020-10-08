const {printArray} = require('../../../main/array/eight/PrintingArrayElementsWithCommaDelimiters');

test('Function should concatenate array element with comma as delimiter', () => {

    expect(printArray([5, 6, 7, 8])).toEqual('5,6,7,8');
    expect(printArray(['h', 'e', 'l', 'l', 'o'])).toEqual('h,e,l,l,o');
});