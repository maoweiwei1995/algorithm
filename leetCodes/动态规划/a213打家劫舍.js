/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    //处理特例
    if (nums.length = 0) {
        return 0
    }
    if (nums.length = 1) {
        return nums[0]
    }
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    }
    return dp[i]
};