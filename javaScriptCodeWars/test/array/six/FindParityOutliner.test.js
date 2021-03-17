const {findOutlier} = require('../../../main/array/six/FindParityOutliner');

test('Should return the only odd or even digit in array', () => {
   expect(findOutlier([0, 1, 2])).toEqual(1);
   expect(findOutlier([1, 2, 3])).toEqual(2);
   expect(findOutlier([2,6,8,10,3])).toEqual(3);
   expect(findOutlier([0,0,3,0,0])).toEqual(3);
   expect(findOutlier([1,1,0,1,1])).toEqual(0);
});