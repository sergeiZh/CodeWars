const {mygcd} = require('../../../main/number/seven/greatestCommonDivisor');

describe('Provide pair of numbers have common divisor', () => {
   test('Equal numbers should have the same divisor - their self', () => {
      expect(mygcd(1, 1)).toBe(1);
      expect(mygcd(43, 43)).toBe(43);
   });

   test('Numbers at least have 1 as greatest common divisor', ()=> {
      expect(mygcd(8, 9)).toBe(1);
   });

   test('Provided numbers have common divisor different from 1', () => {
      expect(mygcd(30, 12)).toBe(6);
   });

})
