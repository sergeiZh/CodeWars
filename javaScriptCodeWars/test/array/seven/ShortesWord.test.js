const {findShort} = require('../../../main/array/seven/ShortestWord');

test('Function should return lenght of the shortest word in sentense', () => {
   expect(findShort('bitcoin take over the world maybe who knows perhaps')).toEqual(3);
   expect(findShort('turns out random test cases are easier than writing out basic ones')).toEqual(3);
});