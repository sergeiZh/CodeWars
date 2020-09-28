/**
 * Kata url - https://www.codewars.com/kata/regexp-basics-is-it-a-vowel/
 * Description:
 * Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.
 */

function vowel(letter) {
    return /^[aeiouAEIOU]$/.test(letter);
};


module.exports = {vowel};
