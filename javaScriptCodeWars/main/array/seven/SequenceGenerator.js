/**
 * Kata url - https://www.codewars.com/kata/sequence-generator-1
 *
 * Description:
 * Implement function sequence, which returns new n-size Array filled according to pattern.
 * pattern may be:
 *
 * 1. a function that takes two: (element, index), one: (element) or any arguments (similar to map
 * function), then filled running this function, in other words: function describes sequence,
 * 2. number, string or any other object, then filled by copying, this object n-times.
 *
 * Examples:
 * sequence(3, 4); // [4, 4, 4]
 * sequence(5, []); // [[], [], [], [], []]
 * sequence(2, "s"); // ["s", "s"]
 * sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
 * sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * Note: Sequences are great to work with functional methods like map, reduce,
 * forEach, every or any. For example:
 * // sum of numbers 1-10
 * let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num);
 * Be careful with long sequences. They are just arrays, every element is created when function is called.
 *
 */

function sequence(n, pattern) {
    const outputArr = Array(n);
    if(typeof pattern !== 'function'){
        return outputArr.fill(pattern);
    }
    return Array(n).fill(0).map((value, indx) => pattern(value, indx));
}

// a bit shorter solution
// function sequence(n, pattern) {
//     return Array.from({length: n}, typeof pattern === "function" ? pattern : () => pattern)
// }

module.exports = {sequence};