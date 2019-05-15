/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = []
    dp[1] = 1
    let index = []
    index[2] = 1
    index[3] = 1
    index[5] = 1
    for(let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[index[2]]*2, dp[index[3]]*3, dp[index[5]]*5)
        if (dp[i] === dp[index[2]]*2){
            index[2]++
        }
        if (dp[i] === dp[index[3]]*3){
            index[3]++
        }
        if (dp[i] === dp[index[5]]*5){
            index[5]++
        }
    }
    return dp[n]
};