/**
 * Kata url - https://www.codewars.com/kata/word-count
 *
 * Description:
 * Can you realize a function that returns word count from a given string?
 * You have to ensure that spaces in string is a whitespace for real.
 * What we want and finish of work:
 * countWords("Hello"); // returns 1 as int
 * countWords("Hello, World!") // returns 2
 * countWords("No results for search term `s`") // returns 6
 * countWords(" Hello") // returns 1
 *
 * What kind of tests we got for your code:
 * Function have to count words, but not spaces, so be sure that it does right.
 * Empty string has no words.
 * String with spaces around should be trimmed.
 * Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
 * Be sure that words with chars like -, ', ` are counted right.
 *
 */

function countWords(str) {
    //\uFEFF in regex tries to find UTF BOM character which in test are look like - ﻿
    let incomingValue = str.replace(/\s{2,}|\uFEFF/g, ' ').trim();
    return incomingValue.length === 0 ? 0 : incomingValue.split(' ').length;
}

// match bette solution. Pay attention ^\s - is the same as \S - any character that is not whitespace character
// so match function look for every non-whitespace character
// function countWords(str) {
//     return (str.match(/[^\s]+/g) || []).length;
// }

module.exports = {countWords};