/*
Solution for https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
Description
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
 */

function solution(str){
    return str.split('').reverse().join('');
}

module.exports = {solution};