/**
 * @param {number[][]} triangle
 * @return {number}
 dp[m][n] = Math.min(dp[m])
 击败97%
 */
var minimumTotal = function(triangle) {
    var dp = JSON.parse(JSON.stringify(triangle)) //创建二维数组的神级方法
    var row = triangle.length
    for(var i = 1; i < row; i++) {
        for (var j = 0; j < i+1; j++) {
            if (j == 0) {
                dp[i][0] = dp[i-1][0] + triangle[i][0]
            } else if(j == i){
                dp[i][j] = dp[i-1][j-1] + triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j]
            }
        }
    }
    return Math.min(...dp[row-1])
  };