const {isPrime} = require('../../../main/number/six/isANumberPrime');

describe('Check if provided number is prime', () => {

   test('Numbers less than 2 are not prime', () => {
      expect(isPrime(0)).toEqual(false);
      expect(isPrime(1)).toEqual(false);
   });

   test('Number 2 is the only even prime number', () => {
      expect(isPrime(2)).toEqual(true);
   });

   test('Number is not prime', () => {
      expect(isPrime(75)).toEqual(false);
      expect(isPrime(112)).toEqual(false);
   });

   test('Number is prime', () => {
      expect(isPrime(13)).toEqual(true);
      expect(isPrime(73)).toEqual(true);
   });
});
