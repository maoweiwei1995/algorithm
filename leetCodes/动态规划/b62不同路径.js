/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 击败98%
 */

var uniquePaths = function(m, n) {
    var dp = []
    for (var i = 0; i < m; i++) {
        dp[i] = []
    }
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++){
        if (j == 0) {
          dp[i][j] = 1
        } else {
            if (i == 0){
              dp[i][j] = 1
            } else {
              dp[i][j] = dp[i][j-1] + dp[i-1][j]
            }
        }
      }
    }
    return dp[m-1][n-1]
};