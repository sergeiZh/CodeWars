/**
 * Kata url - https://www.codewars.com/kata/implement-array-dot-prototype-dot-filter-1
 *
 * Description:
 * What we want to implement is Array.prototype.filter() function, just like the
 * existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js
 * and lodash.js.
 *
 * The usage will be quite simple, like:
 * [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
 *
 * Of course, the existing Array.prototype.filter() function has been undefined for the
 * purposes of this Kata.
 */

function filter (func) {
    const outputArr = [];
    for(let elem=0; elem < this.length; elem++){
        if(func(this[elem])){
            outputArr.push(this[elem]);
        }
    }
    return outputArr;
}

module.exports = {filter};
