/**
 * 1.状态转移方程：dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]) 爬到第i级台阶的最小花费= (第i-1阶+cost[i-1])与(第i-2阶+cost[i-2])的小值
 * 2.边界条件：dp[0] = 0, dp[1] = 0
 * 到达当前台阶时判断下从前一个台阶过来省事，还是从前一个的前一个过来省事，一直累加到最后一个台阶完，最小值就是最省体力的。 用p1和p2表示前两个和前一个台阶所耗费的体力，一遍循环就可以了。
 */

 /**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var len = cost.length
   if (len <=2) {
       return Math.min(cost[0], cost[1])
   }
   var dp = []
   dp[0] = 0
   dp[1] = 0
   for (var i = 2; i < len+1; i++) {
        dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
   }
   return dp[len]
};