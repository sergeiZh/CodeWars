/**
 * Kata url - https://www.codewars.com/kata/cat-and-mouse-2d-version/
 *
 * Description:
 * You will be given a string (map) featuring a cat "C" and a mouse "m".
 * The rest of the string will be made up of dots (".") The cat can move the given number of moves up,
 * down, left or right, but not diagonally.
 *
 * You need to find out if the cat can catch the mouse from it's current position and
 * return "Caught!" or "Escaped!" respectively.
 *
 * Finally, if one of two animals are not present, return "boring without two animals".
 *
 * Examples:
 * moves = 5
 * map =
 * ..C......
 * .........
 * ....m....
 *
 * returns "Caught!" because the cat can catch the mouse in 4 moves
 *
 * moves = 5
 * map =
 * .C.......
 * .........
 * ......m..
 * returns "Escaped!" because the cat cannot catch the mouse in  5 moves
 *
 */

function catMouse(map,moves){
    if(!map.includes('C') || !map.includes('m')){
        return 'boring without two animals';
    }

    const catPosition = new Array(2);
    const mousePosition = new Array(2);
    const mapMatrix = map.split('\n');
    for(let i=0; i < mapMatrix.length; i++){
        if(mapMatrix[i].includes('C')){
            catPosition[0] = i;
            catPosition[1] = mapMatrix[i].indexOf('C');
        }
        if(mapMatrix[i].includes('m')){
            mousePosition[0] = i;
            mousePosition[1] = mapMatrix[i].indexOf('m');
        }
    }

    const verticalPath = mousePosition[0] > catPosition[0] ? mousePosition[0] - catPosition[0] : catPosition[0] - mousePosition[0];
    const horizontalPath = mousePosition[1] > catPosition[1] ? mousePosition[1] - catPosition[1] : catPosition[1] - mousePosition[1];
    const number = verticalPath + horizontalPath;
    return moves >=  number ? 'Caught!' : 'Escaped!';

}

module.exports = {catMouse};

var map=
    `..C......
.........
....m....`


