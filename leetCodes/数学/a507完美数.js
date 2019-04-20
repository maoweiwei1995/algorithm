/**
 * 首尾加起来，缩小范围
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
    if (num === 1) {
        return false
    }
    var sum = 1
    for (var i = 2,max = num/2 ; i < max; i++) {
         if (num % i === 0) {
             sum += i + num/i
             max = num / i
         }
    }
     return sum === num
 };
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 0) {
        return false
    }
    var middle = num/2
    var sum = 0
    for (var i = 1; i <= middle; i++) {
         if (num % i === 0) {
             sum += i
         }
    }
     return sum === num
 };