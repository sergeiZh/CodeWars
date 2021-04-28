/**
 * Kata url - https://www.codewars.com/kata/a-function-within-a-function
 *
 * Description:
 * Given an input n, write a function always that returns a function which returns n.
 * var three = always(3);
 * three(); // returns 3
 */

function always (n) {
    return () => n;
}

module.exports = {always};