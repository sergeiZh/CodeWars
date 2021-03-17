const {zipWith} = require('../../../main/array/six/ZipWith');

test('Should return array where each element is a result of provided function with each elements of ' +
         'both arrays', () => {
   expect(zipWith((a,b) => a+b, [0,1,2,3,4,5], [6,5,4,3,2,1])).toEqual([6,6,6,6,6,6]);
   expect(zipWith((a,b) => a+b, [0,1,2,3,4  ], [6,5,4,3,2,1])).toEqual([6,6,6,6,6  ]);
   expect(zipWith((a,b) => a+b, [0,1,2,3,4,5], [6,5,4,3,2,1])).toEqual([6,6,6,6,6,6]);
});