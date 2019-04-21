/**
 * @param {number[][]} A
 * @return {number}
 * 把A第一排赋值给dp第一排  ，从第二排开始 dp[i][j] = A[i][j] + Math.min(dp[i-1][j],dp[i-1][j-1],dp[i-1][j+1]) 
 * 这里要根据j是否是在两端 分类讨论
 * 最后求最后一排dp[len-1][j]中最小的值即可
 */
var minFallingPathSum = function(A) {
    var len = A.length
    var dp = []
    for (i = 0; i < len; i++) {
        dp[i] = []
        for (j = 0; j < len; j++) {
        dp[i][j] = 0       
        }
    }
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if(i==0) dp[i][j] = A[i][j]
            else {
                dp[i][j] = A[i][j] + dp[i-1][j]
                if (j+1<len) {
                    dp[i][j] = Math.min(dp[i][j], A[i][j]+dp[i-1][j+1])
                }
                if (j-1>=0) {
                    dp[i][j] = Math.min(dp[i][j], A[i][j]+dp[i-1][j-1])
                }
            }
        }
    }
   var min = 10000
   for (var j = 0; j < len; j++) {
          min = Math.min(min, dp[len-1][j])
   }
   return min
};