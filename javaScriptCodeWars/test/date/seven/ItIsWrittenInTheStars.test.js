const {starSign} = require('../../../main/date/seven/ItIsWrittenInTheStars');

test('Should return zodiak sign for provided date', () => {
   expect(starSign(new Date(1970, 5, 5))).toEqual('Gemini');
   expect(starSign(new Date(2000, 1, 15))).toEqual('Aquarius');
   expect(starSign(new Date(1987, 7, 23))).toEqual('Leo');
   expect(starSign(new Date(1947, 8, 14))).toEqual('Virgo');
});