/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * 移动窗口法 窗口内0的个数保持不变
 */
var longestOnes = function(A, K) {
    let res = 0
    let i = j = 0
    let len = A.length
    while (i < len && j < len) {
        if (A[j] || K) {
            A[j++]? '' : K--
        } else {
            A[i++]? '' : j++
        }
        res = Math.max(j - i, res)
    }
    return res
};