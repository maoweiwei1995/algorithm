/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let len = A.length
    let dp = 0
    let d1 = A[1] - A[0]
    let d2 = 0
    let ans = 0
    for (let i = 2; i < A.length; i++) {
        d2 = A[i] - A[i-1]
        if (d2 === d1) {
            ans += ++dp //每多一个就要加dp 
        } else {
            dp = 0        
            d1 = d2
        }
    }
    return ans
};