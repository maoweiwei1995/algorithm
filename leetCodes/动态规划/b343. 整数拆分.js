/**
 * @param {number} n
 * @return {number}
 dp[i] = Math.max(dp[j] * (i-j))  j =  1~j-1
 令dp[i]表示整数i对应的最大乘积，那么dp[i]的值应是dp[j]*(i-j),j属于[1,i-1]的最大值，同时注意dp[i]对应的
 值是经过拆分了的，所以还应判断两个数拆分的情况，即j*(i-j)的值，取最大即可。
 */
var integerBreak = function(n) {
    let dp = []
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        dp[i] = 0
        for (let j = i-1;j > 1; j--) {
            dp[i] = Math.max(dp[i], dp[j]*(i-j))
            dp[i] = Math.max(dp[i], j*(i-j))
        }
    }
    return dp[n]
 };

