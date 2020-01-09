/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * 两种情况
 * 1.同加同减 那么最小值是 数组末尾-数组头
 * 2.分为两段 A1 < A2 那么数组最大值为两段数组的尾部的最大值，最小值为两段数组的头部的最小值
 * 最大值-最小值即可
 * 只不过我们不知道怎么分 所以必须遍历来试
 */
var smallestRangeII = function(A, K) {
    let len = A.length
    let min = 0
    let max = 0
    // 1.排序
    A.sort((a, b) => a - b)

    let res = A[len-1] - A[0]
    for (let i = 1; i < len; i++) {
        min = Math.min(A[0]+K, A[i]-K)
        max = Math.max(A[i-1]+K, A[len-1] - K)
        res = Math.min(res, max - min)
    }
    return res
}
let A = [7, 7, 8], K = 2

console.log(smallestRangeII(A, K))