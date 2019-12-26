/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length
    // 1.先上下翻转
    for (let i = 0; i < len/2; i++){
        [matrix[i], matrix[len-i-1]] = [matrix[len-i-1], matrix[i]]
    }
    // 2.然后对角翻转
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix
};

let matrix = 
[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]
console.log(rotate(matrix))