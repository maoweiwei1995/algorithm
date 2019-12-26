/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length
    for (let i = 0; i < len; i++) {
        if (i == 0) {
            if (!flowerbed[i] && !flowerbed[i+1]) {
                flowerbed[i] = 1
                n--
            }
        } else {
            if (!flowerbed[i-1]&& !flowerbed[i] && !flowerbed[i+1]) {
                flowerbed[i] = 1
                n--
            }
        }
    }    
    if (n <= 0) {
        return true
    }
    return false
};

let  flowerbed = [1,0,0,0,1], n = 2
console.log(canPlaceFlowers(flowerbed, n))