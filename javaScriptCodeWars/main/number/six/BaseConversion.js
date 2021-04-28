/**
 * Kata url - https://www.codewars.com/kata/base-conversion/
 *
 * Description:
 * In this kata you have to implement a base converter, which converts positive
 * integers between arbitrary bases alphabets. Here are some pre-defined alphabets:
 * var Alphabet = {
 * BINARY:        '01',
 * OCTAL:         '01234567',
 * DECIMAL:       '0123456789',
 * HEXA_DECIMAL:  '0123456789abcdef',
 * ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
 * ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
 * ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
 * ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
 *
 * The function convert() should take an input (string), the source alphabet (string) and
 * the target alphabet (string). You can assume that the input value always consists
 * of characters from the source alphabet. You don't need to validate it.
 *
 * Examples:
 * // convert between numeral systems
 * convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
 * convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
 * convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
 * convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"
 *
 * // other bases
 * convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
 * convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
 * convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
 * convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
 *
 * Additional Notes:
 *
 * The function must work for any arbitrary alphabets, not only the pre-defined ones
 * You don't have to consider negative numbers *
 */

function convert(input, source, target) {
    let decimalResult = convertToDecimal(input, source);
    return convertFromDecimal(decimalResult, target) + '';
}

function convertToDecimal(input, source){
    if(source === '0123456789'){
        return parseInt(input);
    }

    const inputArr = input.split('');
    inputArr.reverse();
    const inputBase = source.length;
    return inputArr.map((value, index) => Math.pow(inputBase, index) * findDecimalValueOfElementOfProvidedAlphabet(value, source))
                   .reduce((accum, curr) => accum + curr);
}

function convertFromDecimal(decimalValue, targetAlphabet){
    if(targetAlphabet === '0123456789'){
        return parseInt(decimalValue);
    }

    const outputSequence = [];

    let output = calculateConvertedValue(outputSequence, decimalValue, targetAlphabet);
    output.reverse();
    return output.join('');
}

function findDecimalValueOfElementOfProvidedAlphabet(letterToFindDecValue, alphabet){
    return alphabet.indexOf(letterToFindDecValue);
}

function findAlphabeticValueFromDecimalCalculation(indexToSearch, alphabet){
    return alphabet.charAt(indexToSearch);
}

function calculateConvertedValue(seqArr, decimalValue, alphabet){
    const alphabetBase = alphabet.length;
    if(decimalValue < alphabetBase){
        decimalValue = Math.floor(decimalValue);
        seqArr.push(findAlphabeticValueFromDecimalCalculation(decimalValue, alphabet))
        return seqArr;
    }

    let result = Math.floor(decimalValue / alphabetBase);
    const reminder = decimalValue - alphabetBase * result;
    seqArr.push(findAlphabeticValueFromDecimalCalculation(reminder, alphabet));
    return calculateConvertedValue(seqArr, result, alphabet);
}

// most voted solution
// function convert(input, source, target) {
//     var inBase = source.length, len = input.length;
//     var value = input.split('')
//                      .reduce(function(p,v,i){return p+source.indexOf(v)*Math.pow(inBase,len-i-1)},0);
//     return toBase(value,target);
// }
//
// function toBase(value, target){
//     var base = target.length;
//     if(value<base) return ''+target.charAt(value);
//     return toBase(Math.floor(value/base),target) + target.charAt(value%base);
// }

module.exports = {convert};