const {fizzbuzz} = require('../../../main/array/seven/FizBuzz');

describe('Incoming number should be transformed into array which elements representation is depended ' +
    'on array index', () => {
    test('Happy path', () => {
       expect(fizzbuzz(10)).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']);
    });

    test('every 3 element should be transformed to Fizz, 5th to Buzz', () => {
       expect(fizzbuzz(7)).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7]);
    });

    test('element which can be divided by 3 and 5 should be transformed to FizzBuzz', () => {
        expect(fizzbuzz(16)).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',
            11,'Fizz',13,14,'FizzBuzz',16]);
    });
});
