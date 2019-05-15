/**
 * @param {number} n
 * @return {number}
 * 这里使用动态规划来做。时间复杂度O(nlogn)，空间复杂度O(n)。
定义一个函数f(n)表示我们要求的解。f(n)的求解过程为：
f(n) = 1 + min{
  f(n-1^2), f(n-2^2), f(n-3^2), f(n-4^2), ... , f(n-k^2) //(k为满足k^2<=n的最大的k)
}
*/
 
var numSquares = function(n) {
    let dp = []
    dp[0] = 0
    for (let i = 1; i <= n; i++){
        dp[i] = i
        for (let j = 1; i - j*j>=0; j++){
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1)
        }
    }
    return dp[n]
};


