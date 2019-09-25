/**
 * 
 * @param {*} v 
 * @param {*} w 
 * @param {*} capacity 
 * 状态转移方程
 *    dp[i][j] = dp[i-1][j]   j < w[i]
 *    dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w[i]]+v[i])  j >= w[i]
 */

function bagpack(v, w, capacity) {
    let dp = []
    let len = v.length
    //初始化
    for (let i = 0; i < len; i++) {
        dp[i] = []
    } 
    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            }
        }
    }
    
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (j < w[i]) {
                dp[i][j] = dp[i-1][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])
            }
        }
    }
    return dp[len-1][capacity]
}
let v = [6, 3, 5, 4, 6]
let w = [2, 2, 6, 5, 4]
console.log(bagpack(v, w, 10))