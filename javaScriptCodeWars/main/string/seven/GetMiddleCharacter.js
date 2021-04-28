/**
 * Kata url - https://www.codewars.com/kata/get-the-middle-character
 *
 * Description:
 * You are going to be given a word. Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character. If the word's length is even,
 * return the middle 2 characters.
 *
 * Examples:
 * Kata.getMiddle("test") should return "es"
 * Kata.getMiddle("testing") should return "t"
 * Kata.getMiddle("middle") should return "dd"
 * Kata.getMiddle("A") should return "A"
 */

function getMiddle(s) {
    const splittedString = s.split('');
    if(splittedString.length === 1){
        return splittedString[0];
    }
    const middleIndex = Math.ceil(splittedString.length / 2) - 1;
    return splittedString.length % 2 === 0 ? splittedString[middleIndex] + splittedString[middleIndex+1]
        : splittedString[middleIndex];
}

module.exports = {getMiddle};

// more clever solution
// function getMiddle(s){
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }