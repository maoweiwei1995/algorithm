/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var i = 1
    while (n > 0) {
        n = n - i++
        if (n < i) {
            return i - 1 
        }
    }
    return 0
};