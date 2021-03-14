/**
 * Kata url - https://www.codewars.com/kata/duplicate-encoder
 *
 * Description:
 * The goal of this exercise is to convert a string to a new string where each character
 * in the new string is "(" if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string.
 * Ignore capitalization when determining if a character is a duplicate.
 *
 * Example:
 * "din"      =>  "((("
 * "recede"   =>  "()()()"
 * "Success"  =>  ")())())"
 * "(( @"     =>  "))(("
 *
 */

function duplicateEncode(word) {
    const letterDuplicatePresence = new Map();
    const lowerCasedLetters = word.toLowerCase().split('');
    lowerCasedLetters
        .forEach(letter => {
            if (letterDuplicatePresence.has(letter)) {
                letterDuplicatePresence.set(letter, true);
            } else {
                letterDuplicatePresence.set(letter, false);
            }
        });
    return lowerCasedLetters
        .map(letter => letterDuplicatePresence.get(letter) ? ')' : '(')
        .join('');
}

// more sophisticated solution. Not use map class but use indexOf - searches for the first
// encounter and lastIndexOf - searches for last encounter. If they return equal position
// then word has no duplicates, otherwise duplicates are present
// function duplicateEncode(word){
//     return word
//         .toLowerCase()
//         .split('')
//         .map( function (a, i, w) {
//             return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//         })
//         .join('');
// }

module.exports = {duplicateEncode};