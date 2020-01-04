/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 * 两元一次方程
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    let x = 0
    let y = 0
    x = (tomatoSlices - 2 * cheeseSlices) / 2
    y = (4 * cheeseSlices - tomatoSlices)/2
    if (x - Math.floor(x) > 0 || y - 2 * Math.floor(y) > 0 || x < 0 || y < 0) {
        return []
    } else {
        return [x, y]
    }
};

let a = 16, b = 7

numOfBurgers(a, b)