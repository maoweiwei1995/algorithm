/**
 * @param {number[]} nums
 * @return {number}
 * 根据有没有打劫最后一户可分为两种情况
 dp[0] = 0
 dp[1] = nums[0]
 dp[2] = Math.max(nums[1],nums[0])
 dp[n] = Math.max(dp[n-1],dp[n-2]+nums[n-1])
 */
var rob = function(nums) {
    if(nums.length == 0){
        return 0
    }
    let len = nums.length
    let dp = []
    dp[0] = 0
    dp[1] = nums[0]
    for(let i = 2; i <= len; i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1])
    }
    return dp[dp.length-1]
};