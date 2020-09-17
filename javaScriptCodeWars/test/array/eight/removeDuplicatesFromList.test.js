const {distinct} = require('../../../main/array/eight/removeDuplicatesFromList');

test('Duplicates should be removed from the provided list, order should not be changed', () => {
   expect(distinct([1,1,2])).toEqual([1,2]);
   expect(distinct([1])).toEqual([1]);
   expect(distinct([1,2])).toEqual([1,2]);
});