/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l = 0, r = nums.length-1
    while(l <= r) {
        m = l+((r-l)>>1)
        if (target == nums[m]) {
            return m
        } else if (target > nums[m]) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return -1
};