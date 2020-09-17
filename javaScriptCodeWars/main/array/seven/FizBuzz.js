/*
Kata url - https://www.codewars.com/kata/fizz-buzz
Description:
Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less than 1).

    C# ONLY: If N is smaller than or equal to 0, throw an ArgumentOutOfRangeException!

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value 'Fizz' instead
    If the value is a multiple of 5: use the value 'Buzz' instead
    If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

C# method calling example:

string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]


 */

function fizzbuzz(n) {
    return [...Array(n+1).keys()].filter(value => value > 0).map(value => {
        if(value % 3 === 0 && value % 5 === 0){
            return 'FizzBuzz';
        }

        if(value % 3 === 0){
            return 'Fizz';
        }

        if(value % 5 === 0){
            return 'Buzz';
        }

        return value;
    })
}

module.exports = {fizzbuzz};