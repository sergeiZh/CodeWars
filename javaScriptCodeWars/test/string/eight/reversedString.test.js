const {solution} = require('../../../main/string/eight/reversedString')

test('Test should return reversed string', () => {
    expect(solution('world')).toEqual('dlrow');
})