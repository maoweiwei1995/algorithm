/**
 * @param {number} n
 * @return {number}
dp[0] = 0
dp[1] = 10
dp[2] = 91
dp[i-1]-dp[i-2] 去除重复计算部分
 */
var countNumbersWithUniqueDigits = function(n) {
    let dp = []
    dp[0] = 1
    dp[1] = 10
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + (dp[i-1]-dp[i-2])*(10-(i-1))
    }
    return dp[n]
};
