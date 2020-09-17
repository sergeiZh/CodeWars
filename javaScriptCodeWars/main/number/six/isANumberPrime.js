/**
 * Kata url https://www.codewars.com/kata/is-a-number-prime/
 * Description:
 * Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
 *
 * Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 * Requirements
 *
 *     You can assume you will be given an integer input.
 *     You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
 *     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on
 *     language version). Looping all the way up to n, or n/2, will be too slow.
 */

function isPrime(num) {
    if(num === 2 || num === 3){
        return true;
    }

    if(num < 2 || num % 2 === 0 || num % 3 === 0){
        return false;
    }


    const sqrtOfNum = Math.floor(Math.sqrt(num));
    const dilimeter = [...Array(sqrtOfNum+1).keys()].filter(number => number > 2).find(number => num % number === 0);

    return dilimeter === undefined ? true : false;
}

module.exports = {isPrime};

isPrime(676884289);