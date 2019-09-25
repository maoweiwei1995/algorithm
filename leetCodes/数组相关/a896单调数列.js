/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let len = A.length
    if (A[0] < A[len-1]){
        for (let i = 0; i < len-1; i++){
            if (A[i] > A[i+1]){
                return false
            }
        }  
    } else {
        for (let i = 0; i < len-1; i++){
            if (A[i] < A[i+1]){
                return false
            }
        }  
    }
    return true
};