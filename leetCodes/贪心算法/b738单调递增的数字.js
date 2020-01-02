/**
 * @param {number} N
 * @return {number}
    * 思路：
    *  从右向左扫描数字，若发现当前数字比其左边一位（较高位）小，
    *  则把其左边一位数字减1，并将该位及其右边的所有位改成9
    */
var monotoneIncreasingDigits = function(N) {
    N = String(N).split('')
    let len = N.length
    let sig = 0
    for (let i = len-1; i >= 1; i--) {
        if (N[i-1] > N[i]) {
            sig = i
            N[i-1]--
            for (let j = sig; j < len; j++) {
                N[j] = 9
            }
        }
    }
    return parseInt(N.join(''))
};
console.log(monotoneIncreasingDigits(1111))