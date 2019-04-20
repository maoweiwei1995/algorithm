/**
 *利用 1+3+5+7+9+…+(2n-1)=n^2，即完全平方数肯定是前n个连续奇数的和
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var cur = 1
    while(num > 0) {
        num -= cur
        cur += 2
    }
    return num === 0
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num == 1) {
        return true
    }
    for (var i = 2; i <= num/2 ; i++) {
        if (num === i*i) {
            return true
        }
    }
    return false
};