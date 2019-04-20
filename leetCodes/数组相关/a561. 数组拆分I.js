/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var max = 0
    nums = nums.sort((a,b) => {
        return a-b
    })
    for (var i = 0; i < nums.length;) {
        max += nums[i]
        i += 2
    }
    return max
};