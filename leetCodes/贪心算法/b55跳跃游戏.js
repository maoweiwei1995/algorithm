/**
 * @param {number[]} nums
 * @return {boolean}
 * 从后往前遍历数组，如果遇到的元素可以到达最后一行，则截断后边的元素。否则继续往前，弱最后剩下的元素大于1个，则可以判断为假。否则就是真，时间复杂度O(n)
 */
var canJump = function(nums) {
    var j = 1
    for (var i = nums.length-2; i>=0; i--) {
        if (nums[i] >= j) {
            j = 1
        } else {
            j++
        }
    }
    if (i== -1 && j>1) {
        return false
    }
    return true
};


/** 从左往右遍历
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length == 1){
        return true
    }
    var cur = 0
    var i = 0
    for (var i = 0; i < nums.length; i++) {
        if (cur < i) {
            break;
        }
        cur = Math.max(cur, i + nums[i])
    }
    return cur >= nums.length-1
};