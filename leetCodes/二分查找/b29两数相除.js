/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend == 0){
        return 0
    }
    if (divisor == -1 && dividend == -2147483648){
        return 2147483647
    }
    if (divisor == -1 && dividend == 2147483648){
        return -2147483648
    }
    if (divisor == 1 && dividend == -2147483648){
        return -2147483648
    }
    let neg = (dividend ^ divisor) < 0 ? -1: 1
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let res = 0
    for (let i = 31; i >= 0; i--) {
        if ( (dividend >> i) >= divisor) {
            res += 1 << i
            dividend -= divisor<<i
        }
    }
    return neg == -1? -res:res
};