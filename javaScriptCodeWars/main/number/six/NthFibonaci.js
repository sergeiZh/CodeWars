/**
 * Kata url - https://www.codewars.com/kata/n-th-fibonacci
 *
 * Description:
 * I love Fibonacci numbers in general, but I must admit I love some more than others.
 * I would like for you to write me a function that when given
 * a number (n) returns the n-th number in the Fibonacci Sequence.
 *
 * For example:
 * nthFibo(4) == 2
 *
 * Because 2 is the 4th number in the Fibonacci Sequence.
 * For reference, the first two numbers in the Fibonacci sequence are 0 and 1,
 * and each subsequent number is the sum of the previous two. *
 */

function nthFibo(n) {
    if(n <= 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }
    const initialFibonaciArr = [0, 1];
    for(let i=2; i<=n; i++){
        initialFibonaciArr[i] = initialFibonaciArr[i-1] + initialFibonaciArr[i-2];
    }
    return initialFibonaciArr[n-1];
}

// very javascript-y solution)
// function nthFibo(n) {
//     let [prev, curr] = [0, 1];
//     for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//     return prev;
// }

module.exports = {nthFibo};