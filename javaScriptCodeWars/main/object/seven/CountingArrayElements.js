/**
 * Kata url - https://www.codewars.com/kata/counting-array-elements
 *
 * Description:
 * Write a function that takes an array and counts the number of each unique element present.
 * count(['james', 'james', 'john']) => { 'james': 2, 'john': 1}
 *
 */

function count(array){
    const outputMap = {};
    array.forEach(element => {
        if(outputMap[element] === undefined){
            outputMap[element] = 1;
        } else {
            outputMap[element]++;
        }
    });
    return outputMap;
}

module.exports = {count};