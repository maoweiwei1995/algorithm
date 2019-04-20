/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 贪心算法 
 * 核心：max-price[i]>=fee 即不会亏 
 * 题解：选择的关键是找到一个最大后是不是能够卖掉stock，重新开始寻找买入机会。比如序列1 3 2 8，如果发现2小于3就完成交易买1
 * 卖3，此时由于fee=2，（3-1-fee）+(8-2-fee)<(8-1-fee)，所以说明卖早了，令max是当前最大price，
 * 当（max-price[i]>=fee）时可以在max处卖出，且不会存在卖早的情况，再从i开始重新寻找买入机会。
  
 */
var maxProfit = function(prices, fee) {
    var n = prices.length
    if (n == 0) {
        return 0
    }
   var ans = 0
   var min = prices[0]
   var max = prices[0]
   var cur = 0
   for (var i=1; i < n; i++) {
       min = Math.min(min, prices[i])
       max = Math.max(max, prices[i])
       cur = Math.max(cur, prices[i] - min -fee)
       if (max - prices[i] >= fee) {
            ans += cur 
            cur = 0
            min = prices[i]
            max = prices[i]
       }
   }
    return ans+cur
};
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 动态规划
 * dp思路：dp[0]代表手上没有支票 dp[1]代表手上有支票 
dp[0]可能就是i之前就没有股票或者在i天卖出了股票。 
dp[1]可能就是i之前就有股票或者在i天买进了股票。 
转移方程就是: 
dp[0]=max(dp[0],dp[1]+prices[i]-fee); 
dp[1]=max(dp[1],dp[0]-prices[i]);
--------------------- 
 */
var maxProfit = function(prices, fee) {
    if (prices.length == 0){
        return 0
    }
    var dp = []
    dp[0] = 0
    dp[1] = -prices[0]
    for (var i = 1; i < prices.length; i++) {
         dp[0] = Math.max(dp[0], dp[1]+prices[i]-fee) 
         dp[1] = Math.max(dp[1], dp[0]-prices[i])
    }
    return Math.max(dp[0], dp[1])
};