/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length
    if (len == 0){
        return 0
    } else if(len == 1) {
        return nums[0]
    }
    let dp1 = []
    let dp2 = []
    // 从0到 len-2的dp 选0不选len-1
    dp1[0] = nums[0]
    dp1[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < len - 1; i++) {
      dp1[i] = Math.max(dp1[i-1], dp1[i-2] + nums[i])
    }
    // 从1到 len-1的dp 选len-1不选0
    dp2[1] = nums[1]
    dp2[2] = Math.max(nums[1], nums[2])
    for (let i = 3; i < len; i++) {
      dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i])
    }
    return Math.max(dp2[len-1],dp1[len-2])
  };