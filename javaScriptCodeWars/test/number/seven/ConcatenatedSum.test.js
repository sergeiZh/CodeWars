const {checkConcatenatedSum} = require('../../../main/number/seven/ConcatenatedSum');

test('Should return true in case sum of concatenated parts of provided number equals to it', () => {
    expect(checkConcatenatedSum(2997, 3)).toBeTruthy();
    expect(checkConcatenatedSum(-2997, 3)).toBeTruthy();
})