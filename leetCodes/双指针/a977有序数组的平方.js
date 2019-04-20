/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    var i = 0, j = A.length-1
    var ans = []
    while(i <= j) {
        if (Math.abs(A[i]) >= Math.abs(A[j])) {
            ans.unshift(Math.pow(A[i++],2))
        } else {
            ans.unshift(Math.pow(A[j--],2))
        }
    }
    return ans
};