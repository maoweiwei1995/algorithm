/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return /^10*$/.test(n.toString(3))
};

/**
 * @param {number} n
 * @return {boolean} 1162261467是32位整数中最大的3的整数次幂
 */
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467%n == 0
};