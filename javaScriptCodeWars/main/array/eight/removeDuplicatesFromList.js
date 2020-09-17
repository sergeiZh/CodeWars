/*
Kata url - https://www.codewars.com/kata/remove-duplicates-from-list
Description:
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

 */

function distinct(a) {
    return Array.from(new Set(a));
}

module.exports = {distinct};