const {always} = require('../../../main/clojures/six/FunctionWithinFunction');

test('Tested function should return function which returns provided parameter', () => {
   expect(always(5)()).toEqual(5);
   expect(always(0)()).toEqual(0);
});