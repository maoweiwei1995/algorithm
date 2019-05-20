/**
 * @param {number[]} prices
 * @return {number}
 dp[i] = Math.max(dp[i-2]-p[i],+p[i])
 三种状态 冷却 买入 卖出
 */
var maxProfit = function(prices) {
    let len = prices.length
    if (len == 0){
        return 0
    }    
    let sell = Array(len).fill(0)
    let cool = Array(len).fill(0)
    let buy = Array(len).fill(0)
    buy[0] = -prices[0]
    for (let i = 1; i<len; i++) {
        // 第i天是卖出  意味着和冷冻没关系 1是前一天买入的收益+今天当天卖出的收益   延续前一天买出的收益
        sell[i] = Math.max(buy[i-1]+prices[i],sell[i-1])
        // 第i天冷冻，1.延续前一天是冷冻 2.前一天是卖出
        cool[i] = Math.max(cool[i-1], sell[i-1])
        // 第i天买入 1.前一天是冷冻状态，今天买了 2 前一天是买入状态，延续到今天，今天没买
        buy[i] = Math.max(cool[i-1]-prices[i], buy[i-1])
    }
    return Math.max(sell[len-1], cool[len-1])
};