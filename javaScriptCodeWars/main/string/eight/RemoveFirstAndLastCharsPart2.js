/**
 * Kata url - https://www.codewars.com/kata/remove-first-and-last-character-part-two
 *
 * Description:
 * You are given a list of character sequences as a comma separated string.
 * Write a function which returns another string containing all the character sequences
 * except the first and the last ones, separated by spaces.
 * If the input string is empty, or the removal of the first and last items would cause
 * the string to be empty, return a null value.
 */

function array(arr){
    if(arr.length === 0 || !arr.includes(',') || arr.match(/,/g).length < 2){
        return null;
    }
    return arr.split(',').map(letter => letter.trim()).slice(1, -1).join(' ');
}

// more elegant solution
// function array(arr){
//     return arr.split(",").slice(1,-1).join(" ") || null;
// }

module.exports = {array};