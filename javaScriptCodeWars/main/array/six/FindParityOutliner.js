/**
 * Kata url - https://www.codewars.com/kata/find-the-parity-outlier
 *
 * Description:
 *
 * You are given an array (which will have a length of at least 3, but could be very large)
 * containing integers. The array is either entirely comprised of odd integers or entirely
 * comprised of even integers except for a single integer N. Write a method that takes the
 * array as an argument and returns this "outlier" N.
 *
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)
 *
 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 */

function findOutlier(integers){
    let findEvenNumber = false;

    if(integers[0] %2 !== 0 && integers[1] %2 !== 0){
        findEvenNumber = true;
    } else if((integers[0] %2 !== 0 && integers[1] %2 === 0) ||
        (integers[0] %2 === 0 && integers[1] %2 !== 0)) {
        if(integers[2] %2 !== 0){
            findEvenNumber = true;
        }
    }

    return integers.find(element => {
        if(findEvenNumber){
            return element %2 === 0;
        }
        return element %2 !== 0;
    });
}

// much better and clever
// function findOutlier(integers){
//     return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
// }
// function even(num){
//     return (num % 2 == 0);
// }
// function odd(num){
//     return !even(num)
// }

module.exports = {findOutlier};