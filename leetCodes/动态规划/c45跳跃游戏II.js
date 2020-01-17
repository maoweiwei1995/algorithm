/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */
var jump = function(nums) {
    let len = nums.length
    let dp = []
    dp[0] = 0
    for (let i = 1; i < len; i++) {
        dp[i] = i
        for (let j = 0; j <= i; j++) {
            if (j + nums[j] >= i) {
                dp[i] = dp[j] + 1
                break
            }
        }
    }
    return dp[len-1]
};