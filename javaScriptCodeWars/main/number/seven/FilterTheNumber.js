/**
 * Kata url - https://www.codewars.com/kata/filter-the-number
 *
 * Description:
 * Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text,
 * can you return the number back to it's original state?
 *
 * Your task is to return a number from a string.
 *
 * Details
 * You will be given a string of numbers and letters mixed up,
 * you have to return all the numbers in that string in the order they occur.
 */

function filterNumber (value) {
    return Number.parseInt(value.split('')
                                .filter(letter => !isNaN(letter))
                                .join(''), 10);
}

// solution with regex
// var FilterString = function(value) {
//     return parseInt(value.replace(/[^\d]/g, ""))
// }

module.exports = {filterNumber};