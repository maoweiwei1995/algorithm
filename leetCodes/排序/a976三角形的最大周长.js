/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    //1.先排序
    A.sort((a, b)=> {
        return b - a
    })
    var max = 0
    var i = 0
    while (i < A.length - 2) {
        if (A[i+1]+A[i+2] > A[i]){
            return A[i+1] + A[i+2] + A[i]
        }
        i++
    }
    return 0
};