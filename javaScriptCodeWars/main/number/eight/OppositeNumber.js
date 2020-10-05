/**
 * Kata url - https://www.codewars.com/kata/opposite-number
 * Description:
 * Very simple, given a number, find its opposite.
 *
 * Examples:
 *
 * 1: -1
 * 14: -14
 * -34: 34
 */

function opposite(number) {
    return number === 0 ? 0 : number * -1;
}

module.exports = {opposite};