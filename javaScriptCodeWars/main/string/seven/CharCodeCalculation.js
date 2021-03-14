/**
 * Kata url - https://www.codewars.com/kata/char-code-calculation
 *
 * Description:
 *
 * Given a string, turn each character into its ASCII character code and
 * join them together to create a number - let's call this number total1:
 * 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
 *
 * Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
 * total1 = 656667
 *               ^
 * total2 = 656661
 *               ^
 * Then return the difference between the sum of the digits in total1 and total2:
 *     (6 + 5 + 6 + 6 + 6 + 7)
 *   - (6 + 5 + 6 + 6 + 6 + 1)
 *   -------------------------
 *                          6
 */

function calc(str) {
    return str.split('')
              .map(letter => letter.charCodeAt(0))
              .join('')
              .split('')
              .map(letter => parseInt(letter))
              .filter(number => number === 7)
              .reduce((accum, next) => accum + 6, 0);
}

// possible solution
// const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6

module.exports = {calc};

