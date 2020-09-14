const {century} = require('../../../main/number/eight/centuryFromYear');

test('', () => {
   expect(century(1705)).toBe(18);
   expect(century(1601)).toBe(17);
   expect(century(2000)).toBe(20);
   expect(century(89)).toBe(1);
});
