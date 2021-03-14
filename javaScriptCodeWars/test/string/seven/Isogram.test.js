const {isIsogram} = require('../../../main/string/seven/Isogram')

test('Return true when there are no duplicate letters in provided sentence', () => {
    expect(isIsogram('Dermatoglyphics')).toBeTruthy();
    expect(isIsogram('Dermatoglyphics')).toBeTruthy();
    expect(isIsogram('')).toBeTruthy();
})

test('Return false when there are duplicate letters in provided sentence', () => {
    expect(isIsogram('aba')).toBeFalsy();
    expect(isIsogram('moOse')).toBeFalsy();
    expect(isIsogram('isIsogram')).toBeFalsy();
})