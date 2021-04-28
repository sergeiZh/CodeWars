/**
 * Kata url - https://www.codewars.com/kata/partition-on
 *
 * Description:
 * Write a function which partitions a list of items based on a given predicate.
 *
 * After the partition function is run, the list should be of the form [ F, F, F, T, T, T ]
 * where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).
 *
 * NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts)
 * should be preserved relative to each other.
 *
 * For convenience and utility, the partition function should return the boundary index.
 * In other words: the index of the first T value in items.
 *
 * For example:
 * var items = [1, 2, 3, 4, 5, 6];
 * function isEven(n) {return n % 2 == 0}
 * var i = partitionOn(isEven, items);
 * // items should now be [1, 3, 5, 2, 4, 6]
 * // i     should now be 3
 */

function partitionOn(pred, items) {
    const trueArr = [];
    const falseArr = [];
    items.forEach(item => pred(item) ? trueArr.push(item) : falseArr.push(item));
    const sourceArr = [...falseArr, ...trueArr];
    items.splice(0, items.length);
    sourceArr.forEach(item => items.push(item));
    return falseArr.length;
}

function process (arr){
    const val = arr.length;
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6];
partitionOn((n)=> n % 2 == 0, arr);
process(arr);

module.exports = {partitionOn};