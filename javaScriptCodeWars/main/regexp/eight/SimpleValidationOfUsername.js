/**
 * Kata url - https://www.codewars.com/kata/simple-validation-of-a-username-with-regex
 *
 * Description:
 * Write a simple regex to validate a username. Allowed characters are:
 *
 *     lowercase letters,
 *     numbers,
 *     underscore
 *
 * Length should be between 4 and 16 characters (both included).
 */

function validateUsr(username) {
    const regExp = /^[a-z0-9_]{4,16}$/;
    return regExp.test(username);
}

module.exports = {validateUsr};