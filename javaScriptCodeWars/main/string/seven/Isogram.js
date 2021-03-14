/*
* Kata url - https://www.codewars.com/kata/isograms/
*
* Description:
*
* An isogram is a word that has no repeating letters, consecutive or non-consecutive.
* Implement a function that determines whether a string that contains only letters is an isogram.
* Assume the empty string is an isogram. Ignore letter case.
*
* isIsogram("Dermatoglyphics") == true
* isIsogram("aba") == false
* isIsogram("moOse") == false // -- ignore letter case
*
 */

function isIsogram(str) {
    const sort = str.split('')
                    .map(letter => letter.toLowerCase())
                    .sort();
    return new Set(sort).size === sort.length;
}

// solution with regex
// function isIsogram(str){
//     return !/(\w).*\1/i.test(str)
// }

module.exports = {isIsogram}