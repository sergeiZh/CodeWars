/**
 * Kata url - https://www.codewars.com/kata/regexp-basics-is-it-a-letter
 * Description:
 * Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
 */

function isLetter (message) {
    return /^[a-zA-Z]$/.test(message);
}

module.exports = {isLetter};
