const {createFunctions} = require('../../../main/clojures/six/ClojuresAndScopes');

test('Should return function which returns index of the array in which it resides', () => {
   expect(createFunctions(4)[0]()).toEqual(0);
   expect(createFunctions(3)[2]()).toEqual(2);
   expect(createFunctions(5)[1]()).toEqual(1);
});