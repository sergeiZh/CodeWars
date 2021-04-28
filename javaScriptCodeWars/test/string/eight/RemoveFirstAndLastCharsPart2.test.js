const {array} = require('../../../main/string/eight/RemoveFirstAndLastCharsPart2');

test('Should return null in case provided string empty or after removing' +
         'first and last element would has no elements', () => {
    expect(array('')).toBeNull();
    expect(array('1')).toBeNull();
    expect(array('1, 3')).toBeNull();
});

test('Should return entered string without first and last characters separated by space', () => {
    expect(array('1,2,3')).toEqual('2');
    expect(array('1,2,3,4, 6')).toEqual('2 3 4');
});