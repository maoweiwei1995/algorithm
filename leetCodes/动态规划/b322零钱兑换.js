/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * dp[0] = 0
    dp[i] = Math.min(dp[i], dp[i-coins[j]]+1)
    学到了一个fill方法的用法
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for (let c of coins) {
        for (let i = c; i<= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i-c]+1)
        }
    }
    return dp[amount] == Number.MAX_SAFE_INTEGER ? -1:dp[amount]
};


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 贪心算法对这道题有点问题 和输入有关系
 */
var coinChange = function(coins, amount) {
    let len = coins.length
    let dp = []
    let sum = 0
    //对coins从小到大排序
    coins.sort((a,b)=>{
        return a-b
    })
    for (let i = 0; i < len; i++){
        dp[i] = 0
    }
    for (let i = len-1; i >= 0 ; i--){
        while(amount >= coins[i]){
            amount -= coins[i]
            dp[i]++
        }      
    }
    sum =  dp.reduce((sum, cur)=> {
        return sum + cur
    },0)
    return amount > 0 ? -1:sum
};