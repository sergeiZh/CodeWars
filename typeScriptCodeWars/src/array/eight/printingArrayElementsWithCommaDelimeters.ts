/**
 * Kata url - https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
 * Description:
 * Input: Array of elements
 *
 * ["h","o","l","a"]
 *
 * Output: String with comma delimited elements of the array in th same order.
 *
 * "h,o,l,a"
 *
 */

export const printArray = (array: number[]|string[]): string => {
    return array.map(numberValue => numberValue.toString(10)).join(',');
}