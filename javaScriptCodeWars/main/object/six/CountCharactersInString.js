/*
Kata url - https://www.codewars.com/kata/count-characters-in-your-string
Description:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

 */

function count (string) {
    const outputObj = {};
    string.split('').forEach(letter => {
        if(outputObj[letter]){
            outputObj[letter]++;
        } else {
            outputObj[letter] = 1;
        }
    })
    return outputObj;
}

module.exports = {count};