const {fridayTheThirteenths} = require('../../../main/date/six/FridayThe13th');

test('Should return formatted array of dates with Friday is 13th', () => {
   expect(fridayTheThirteenths('1999', '2000')).toEqual("8/13/1999 10/13/2000")
   expect(fridayTheThirteenths('2000')).toEqual("10/13/2000")
});