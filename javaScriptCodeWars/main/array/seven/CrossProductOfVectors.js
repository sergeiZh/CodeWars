/**
 * Kata url - https://www.codewars.com/kata/cross-product-of-vectors
 *
 * Description:
 * Make a function called crossProduct that takes two 3 dimensional vectors (in the form of two arrays)
 * and returns their cross product. You need to check if the passed arguments are of the
 * expected format, otherwise throw the message: "Arguments are not 3D vectors!".
 *
 * crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
 * crossProduct('gobbledigook', [1,1,1]) //should throw the string "Arguments are not 3D vectors!"
 *
 * Your function should handle non integers.
 * More info on cross products: https://en.wikipedia.org/wiki/Cross_product
 *
 * crossprod([1,0,0], [0,1,0], 3, 3)         /* should return [0,0,1]
 * crossprod([1,2,3,4,5], [5,4,3,2,1], 5, 5) /* should return NULL
 * crossprod([6,6,6], NULL, 3, 3)            /* should return NULL
 * crossprod(NULL, NULL, 3, 3)               /* should return NULL
 *
 *
 * Good explanation of how cross product can be calculated
 * https://www.mathsisfun.com/algebra/vectors-cross-product.html
 * Example: The cross product of a = (2,3,4) and b = (5,6,7)
 *
 * Cx = AyBz − AzBy = 3×7 − 4×6 = −3
 * Cy = AzBx − AxBz = 4×5 − 2×7 = 6
 * Cz = AxBy − AyBx = 2×6 − 3×5 = −3
 * Answer: a × b = (−3,6,−3)
 */

function crossProduct (vector1, vector2) {
    if(vector1 === null || vector2 === null){
        return null;
    }

    if(!Array.isArray(vector1) || !Array.isArray(vector2) || vector1.length !== 3
        || vector2.length !== 3){
        throw 'Arguments are not 3D vectors!';
    }

    const cx = vector1[1] * vector2[2] - vector1[2] * vector2[1];
    const cy = vector1[2] * vector2[0] - vector1[0] * vector2[2];
    const cz = vector1[0] * vector2[1] - vector1[1] * vector2[0];
    return [cx, cy, cz];
}

module.exports = {crossProduct};





