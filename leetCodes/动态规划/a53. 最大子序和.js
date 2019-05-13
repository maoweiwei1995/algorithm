/**
 * @param {number[]} nums
 * @return {number}
 * 动态归回
 * 前n个长度的数组中的最大值 = Math.max(前n-1个+最后一个,最后一个)
 */
var maxSubArray = function(nums) {
    var max = nums[0]
    var dp = []
    dp[0] = nums[0]
    for(var i = 1,len = nums.length; i < len; i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
        max = Math.max(max,dp[i])
    }
    return max
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = nums[0]
    var max = nums[0]
    for(var i = 1,len = nums.length; i < len; i++){
        if(sum > 0){
            sum += nums[i]
        } else{
            sum = nums[i]
        }
        max = Math.max(max,sum)
    }
    return max
};