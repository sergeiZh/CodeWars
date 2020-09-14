/*
Kata ulr https://www.codewars.com/kata/greatest-common-divisor
Description:
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

 */

/*
To solve Kata I used Euclid's algorithm.
For example, to compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12.
Then divide 18 by 12 to get a quotient of 1 and a remainder of 6.
Then divide 12 by 6 to get a remainder of 0, which means that 6 is the gcd.
Here, we ignored the quotient in each step, except to notice when the remainder reached 0,
signalling that we had arrived at the answer.
https://en.wikipedia.org/wiki/Greatest_common_divisor
 */
function mygcd(x,y){
    if(x > y){
        return findDivisor(x, y);
    }
    return findDivisor(y, x);
}

function findDivisor(greaterNumber, lesserNumber){
    let divisionFraction = greaterNumber % lesserNumber;
    if(divisionFraction === 0) {
        return lesserNumber;
    }

    return findDivisor(lesserNumber, divisionFraction);
}


module.exports = {mygcd};