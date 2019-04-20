/**
 * 找a和b的最小值即可
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops == null || ops.length==0){
        return m*n
    }
    var len = ops.length
    var mina = 40001,minb = 40001
    for (var i = 0; i < len; i++) {
        if (ops[i][0] < mina) {
            mina = ops[i][0]
        }
        if (ops[i][1] < minb) {
            minb = ops[i][1]
        }
    }
    return mina*minb
};