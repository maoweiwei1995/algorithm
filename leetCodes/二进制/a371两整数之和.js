/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let sum = 0, carry = 0
    sum = a ^ b
    carry = (a & b)<<1
    if (carry !== 0){
        return getSum(sum, carry)
    }
    return sum
};