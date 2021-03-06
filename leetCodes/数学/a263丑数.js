/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0) {
        return false
    }
    var a = [2, 3, 5]
    for (var i = 0; i < 3; i++) {
        while(num % a[i] === 0) {
            num = num / a[i]
        }
    }
    return num == 1 ? true:false
};