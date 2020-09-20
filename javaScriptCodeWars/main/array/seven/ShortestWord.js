/**
 * Kata url - https://www.codewars.com/kata/shortest-word
 * Description:
 * Simple, given a string of words, return the length of the shortest word(s).
 *
 * String will never be empty and you do not need to account for different data types.
 */

function findShort(s){
    return s.split(' ').map(word => word.length).reduce((accum, curr) => accum < curr ? accum : curr);
}

module.exports = {findShort};