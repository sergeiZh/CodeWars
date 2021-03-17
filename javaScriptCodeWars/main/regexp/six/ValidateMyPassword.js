/**
 * Kata url - https://www.codewars.com/kata/validate-my-password
 *
 * Description:
 * I will give you a string. You respond with "VALID" if the string meets the requirements
 * or "INVALID" if it does not.
 * Passwords must abide by the following requirements:
 * More than 3 characters but less than 20.
 * Must contain only alphanumeric characters.
 * Must contain letters and numbers.
 *
 */

function validPass(password){
    if(new RegExp('^[a-zA-Z\\d]{4,20}$').test(password) && new RegExp('.*\\d{1,}.*').test(password)
    && new RegExp('.*[a-zA-Z]{1,}.*').test(password)){
        return 'VALID';
    }
    return 'INVALID';
}

// single line solution
// function validPass(password){
//     return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
// }

module.exports = {validPass};