/**
 * Kata url - https://www.codewars.com/kata/find-the-odd-int/
 *
 * Description:
 * Given an array of integers, find the one that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 */

function findOdd(numberArr) {
    const valueHolder = new Map();
    numberArr.forEach(element => {
        if(valueHolder.has(element)){
            valueHolder.set(element, valueHolder.get(element)+1);
        } else {
            valueHolder.set(element, 1);
        }
    });
    for(let [key, value] of valueHolder){
        if(value %2 !== 0){
            return key;
        }
    }
    return 0;
}

//I don't understand why but it works
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

module.exports = {findOdd};