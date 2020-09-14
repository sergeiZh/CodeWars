const {isAnagram} = require('../../../main/string/seven/anagramDetection');

test('Finds whether provided words anagram or not', () => {
    expect(isAnagram('foefet', 'toffee')).toBe(true);
    expect(isAnagram('Buckethead', 'DeathCubeK')).toBe(true);
    expect(isAnagram('Twoo', 'WooT')).toBe(true);
});

