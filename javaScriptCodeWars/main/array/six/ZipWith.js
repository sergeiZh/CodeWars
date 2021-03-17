/**
 * Kata url - https://www.codewars.com/kata/zipwith
 *
 * Description:
 *
 * Implement zipWith
 * zipWith takes a function and two arrays and zips the arrays together,
 * applying the function to every pair of values.
 * The function value is one new array.
 *
 * If the arrays are of unequal length, the output will only be as long as the shorter one.
 * (Values of the longer array are simply not used.)
 *
 * Inputs should not be modified.
 *
 * Examples:
 * zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
 * zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]
 *
 * zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
 * zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
 */

function zipWith(fn,a0,a1) {
    const numberOfIteration = a0.length > a1.length ? a1.length : a0.length;
    return new Array(numberOfIteration).fill(0)
                                       .map((element, index) => fn(a0[index], a1[index]));
}

// don't understand how it exactly works
// function zipWith(fn,a0,a1) {
//     return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
// }

module.exports = {zipWith};