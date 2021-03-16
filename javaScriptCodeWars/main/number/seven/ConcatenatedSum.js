/**
 * Kata url - https://www.codewars.com/kata/concatenated-sum
 *
 * Description:
 * The number 198 has the property that 198 = 11 + 99 + 88, i.e.,
 * if each of its digits is concatenated twice and then summed,
 * the result will be the original number. It turns out that 198 is
 * the only number with this property. However, the property can be generalized
 * so that each digit is concatenated n times and then summed.
 *
 * original number =2997 , n=3
 * 2997 = 222+999+999+777 and here each digit is concatenated three times.
 *
 * original number=-2997 , n=3
 * -2997 = -222-999-999-777 and here each digit is concatenated three times.
 *
 * Write afunction named check_concatenated_sum that tests if a number has this generalized property.
 */

function checkConcatenatedSum(result, numberOfConcatenation) {
    const resultSign = result < 0 ? '-' : '';
    let stringifiedNumber = Number.parseInt(result, 10).toString(10);
    if (resultSign === '-') {
        stringifiedNumber = stringifiedNumber.substr(1);
    }
    const numbers = stringifiedNumber.split('')
                                     .map(digit => parseInt(
                                         resultSign + new Array(numberOfConcatenation).fill(digit).join('')));
    const results = numbers.reduce((accum, next) => accum + next);
    return results === result;
}

// more sophisticated solution
// function checkConcatenatedSum(sum, n){
//     var abs = Math.abs(sum);
//     return abs === [...abs+""].reduce((s, d) => +d.repeat(n) + s, 0);
// }

module.exports = {checkConcatenatedSum};