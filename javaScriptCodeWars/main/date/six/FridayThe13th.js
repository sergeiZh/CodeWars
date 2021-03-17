/**
 * Kata url - https://www.codewars.com/kata/friday-the-13ths
 *
 * Description:
 * Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive),
 * and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).
 *
 * The return value should be a string where each date is seperated by a space.
 * The date should be formatted like 9/13/2014 where months do not have leading zeroes and are
 * separated with forward slashes.
 *
 * If no end year is given, only return friday the thirteenths during the start year.
 *
 * Examples:
 * fridayTheThirteenths(1999, 2000)
 * // returns "8/13/1999 10/13/2000"
 *
 * fridayTheThirteenths(2014, 2015)
 * // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
 *
 * fridayTheThirteenths(2000)
 * // returns "10/13/2000"
 *
 */

function fridayTheThirteenths(start, end) {
    // for unknown reasons code below is not working in codewars
    // Array.from(Array(parseInt(end, 10) - parseInt(start, 10) + 1), (_, i) => i + parseInt(start))

    let number;
    if(end === undefined){
        number = 1;
    } else {
        number = parseInt(end, 10) - parseInt(start, 10) + 1;
    }
    return new Array(number).fill(parseInt(start))
                .map((element, index) => element + index)
                .map(year => findFridayForAYear(year))
                .join(' ');
}

function findFridayForAYear(yearValue){
    return [...Array(12).keys()].map(monthValue => new Date(yearValue, monthValue, 13))
                         .filter(date => date.getDay() === 5)
        .map(date => `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`)
        .join(' ');
}

// other solution
// function fridayTheThirteenths(start, end) {
//     end = end || start;
//     var matches = [];
//     for (var year = start; year <= end; ++year)
//         for (var month = 1; month <= 12; ++month)
//             if (new Date(year, month - 1, 13).getDay() == 5)
//                 matches.push(month + '/13/' + year);
//     return matches.join(' ');
// }

module.exports = {fridayTheThirteenths};