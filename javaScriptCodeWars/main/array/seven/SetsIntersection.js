/**
 * Kata url - https://www.codewars.com/kata/playing-with-sets-intersection
 *
 * Description:
 * Set objects are new JavaScript built-in objects defined since ECMAScript 2015
 * A Set lets you store unique values of any type. It comes with some useful methods
 * like .add, .clear, .has . . . BUT some "Set operations" are missing, like INTERSECTION
 *
 * Create function inter getting 2 sets as arguments and returning a new Set as result
 * of intersection of these 2 sets.
 *
 * A = new Set([1,2]);
 * B = new Set([2,3]);
 * C = inter(A,B) // -> {2}
 */

function inter(s1, s2){
    const outputSet = new Set();
    s2.forEach(value => {
        if(s1.has(value)) {
            outputSet.add(value);
        }
    });
    return outputSet;
}

// much better solution
// function inter(s1, s2){
//     return new Set( [...s1].filter( e => s2.has(e) ) )
// }

module.exports = {inter};