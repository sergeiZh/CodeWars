/**
 * Kata url - https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/typescript
 * Description:
 * I'm new to coding and now I want to get the sum of two arrays...
 * Actually the sum of all their elements. I'll appreciate for your help.
 *
 * P.S. Each array includes only integer numbers. Output is a number too.
 *
 */


export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
    const firstArrSumm = arr1.reduce((result, current) => result + current, 0);
    const secondArrSumm = arr2.reduce((result, current) => result + current, 0);
    return firstArrSumm + secondArrSumm;
}

// suggested approach
// export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
//     return [...arr1,...arr2].reduce((t,x)=>t+x);
// }