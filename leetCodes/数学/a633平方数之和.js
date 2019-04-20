/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var i = 0, j = Math.floor(Math.sqrt(c))
    var sum = 0
    while (i <= j) {
        sum = i*i+j*j
        if (sum < c) {
            i++
        } else if(sum>c) {
            j--
        } else {
            return true
        }
    }
    return false
};