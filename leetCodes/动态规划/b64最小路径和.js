/**
 * @param {number[][]} grid
 * @return {number}
 dp[0][0] = num[0][0]
 dp[0][1] = num[0][1] + dp[0][0]
 dp[1][0] = num[1][0] + dp[0][0]
 dp[1][1] = dp[0][0] + Math.min(dp[0][1],dp[1][0])
 m = 0
 dp[m][0] = dp[m-1][0] + num[m][0]
 n = 0
 dp[0][n] = dp[0][n-1] + num[0][n]
 dp[m][n] = Math.min(dp[m-1][n], dp[m][n-1]) + num[m][n]
 击败98%
 */
var minPathSum = function(grid) {
    var r = grid.length
    var c = grid[0].length
    var dp = JSON.parse(JSON.stringify(grid))
    for (var i = 1; i < c; i++){
        dp[0][i] = dp[0][i-1] + grid[0][i]
    }
    for (var i = 1; i < r; i++){
        dp[i][0] = dp[i-1][0] + grid[i][0]
    }
    for (var i = 1; i < r; i++){
        for (var j = 1; j < c; j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]      
        }        
    }
    return dp[r-1][c-1]
};