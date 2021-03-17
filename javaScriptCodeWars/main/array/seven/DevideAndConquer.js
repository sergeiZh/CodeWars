/**
 * Kata url - https://www.codewars.com/kata/divide-and-conquer
 *
 * Description:
 * Given a mixed array of number and string representations of integers, add up
 * the string integers and subtract this from the total of the non-string integers.
 *
 * Return as a number.
 */

function divCon(x){
    return x.map(value => typeof value === 'string' ? parseInt('-' + value, 10) : value)
     .reduce((accum, current) => accum + current);
}

// more tiny solution
// function divCon(x){
//     return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

module.exports = {divCon};