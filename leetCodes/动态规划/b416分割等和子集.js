/**
 * @param {number[]} nums
 * @return {boolean}
  dp[i][s] = dp[i-1][s] || dp[i-1][s-nums[i]]
  每一排的值完全由上一排的某两个值决定
  dp[0][0] = true
  dp[1][0] = true
  dp[1][1] = dp[0][1] || dp[0][1-nums[1]]
 */
var canPartition = function(nums) {
    let len = nums.length
    let sum = nums.reduce((s, cur)=>{
        return s+cur
    }, 0)
    if (sum % 2 == 1){
        return false
    }
    let c = sum/2
    let dp = Array(c+1).fill(0)
    for (let i = 0; i <= c; i++) {
        dp[i] = nums[0] === i
    }
    for (let i = 1; i < len; i++) {
        for (let j = c; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j-nums[i]]
        }
    }
    return dp[c]
};
/**
 * @param {number[]} nums
 * @return {boolean}
01背包问题 拿第i个和不拿第i个的区别
 */
var canPartition = function(nums) {
    let len = nums.length
    let dp = Array(len).fill([])
    let sum = nums.reduce((s, cur)=>{
        return s+cur
    }, 0)
    if (sum % 2 == 1){
        return false
    }
    let c = sum/2
    for (let i = 0; i < len; i++) {
        for (let j = c; j >= 0; j--) {
            if( i == 0) {
                dp[0][j] = nums[0] === j
            } else {
                dp[i][j] = dp[i-1][j] || (j-nums[i] >= 0 && dp[i-1][j-nums[i]]) 
            }
        }

    }
    return dp[len-1][c]
};
console.log(canPartition([2,2,3,5]))