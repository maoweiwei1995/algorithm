/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 * dp[i][n] = dp[i-1][n-1] + dp[i-1][n-2] + ... + dp[i-1][n-f]
 * 
 */
var numRollsToTarget = function(d, f, target) {
    let mod = Math.pow(10, 9) + 7
    if(target < d * 1 || target > d * f) {
        return 0
    }
    let dp = []
    for (let i = 0; i <= d; i++) {
        dp[i] = []
        for (let j = 0; j <= target; j++) {
            dp[i][j] = 0
        }
    }
    dp[1] = dp[1].map((item, index) => (index <= f ? 1:0))
    for (let i = 2; i <= d; i++) {
        for (let j = 1; j <= target; j++) {
            for (let k = 1; k <= f; k++) {
                if (k <= j){
                    dp[i][j] += dp[i-1][j-k]
                    dp[i][j] = dp[i][j] % mod
                }
            }
        }
    }
    return dp[d][target]
};
console.log(numRollsToTarget(2, 6, 7))