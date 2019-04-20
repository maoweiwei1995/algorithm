/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var newMar = []
    for (var i=0; i < r; i++) {
        for (var j=0; j < c; j++) {
            newMar[i][j] = 0
         }
    }
    //获取nums的行数和列数
    var nc = nums[0].length
    var nr = nums.length
    var m = n = 0
    //排除异常
    if (nc*nr !== r*c) {
        return nums
    }
    for (var i=0; i < r; i++) {
        for (var j=0; j < c; j++) {
            while(n>=nc) {
                 m++
                 n = 0
            }  
            newMar[i][j] = nums[m][n++]
         }
    }
    return newMar
};

console.log(matrixReshape([[1,2,3],[4,5,6]],3,2))