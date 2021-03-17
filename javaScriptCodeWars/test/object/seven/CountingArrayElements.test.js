const {count} = require('../../../main/object/seven/CountingArrayElements');

test('Should return object with count of each element', () => {
   expect(count(['a', 'a', 'b', 'b', 'b'])).toEqual({ 'a': 2, 'b': 3 });
});