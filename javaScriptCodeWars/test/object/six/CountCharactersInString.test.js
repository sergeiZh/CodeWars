const {count} = require('../../../main/object/six/CountCharactersInString');

describe('Function should return object with count of every letter', () => {
    test('Happy path', () => {
       expect(count('asffsaf')).toEqual({'a': 2, 's': 2, 'f': 3});
    });

    test('Fucntion should return empty object in case empty string provided', () => {
       expect(count('')).toEqual({});
    });

});
