/**
 * Kata url - https://www.codewars.com/kata/squares-sequence
 *
 * Description:
 *
 * Complete the function that returns an array of length powValue,
 * starting with the given number baseNumber and the squares of the previous number.
 * If powValue is negative or zero, return an empty array/list.
 *
 * 2, 5  -->  [2, 4, 16, 256, 65536]
 * 3, 3  -->  [3, 9, 81]
 */

function squares(baseNumber, powValue) {
    if(baseNumber < 0 || powValue < 1) {
        return [];
    }
    const output = new Array(powValue).fill(0);
    const map = new Array(powValue).fill(0)
                                   .forEach((value, index, arr) => {
                                       if (index === 0) {
                                           output[index] = baseNumber;

                                       } else {
                                           output[index] = output[index - 1] * output[index - 1];

                                       }
                                   });
    return output;
}

// most rated solution
// function squares(x, n) {
//     var ret = [];
//     for(var i=0; i<n; i++){
//         ret.push(x);
//         x*= x;
//     }
//     return ret;
// }

module.exports = {squares};