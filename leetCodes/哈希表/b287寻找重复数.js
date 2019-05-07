/**
 * @param {number[]} nums
 * @return {number}  不用额外空间 但是改变了原数组
 */
var findDuplicate = function(nums) {
    for (var i = 0, len = nums.length; i < len; i++) {
       nums[nums[i]] *= -1
    }
    nums.shift()
    var tar = nums.filter(item => {
        return item > 0
    })
    return nums.indexOf(tar[0])
};
/**
 * @param {number[]} nums
 * @return {number}  额外空间O(n)
 */
var findDuplicate = function(nums) {
    var hash = {}
    for (var i = 0, len = nums.length; i < len; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
            if (hash[nums[i]] === 2){
                return nums[i]
            }
        }
    }
};