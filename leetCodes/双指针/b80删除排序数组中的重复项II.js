/**
 * @param {number[]} nums
 * @return {number}  
 */
var removeDuplicates = function(nums) {
    var j = 0
    nums.forEach(item => {
                if (j < 2 || item > nums[j-2]) {
            nums[j++] = item
        }
    }) 
    return j
};
/**
 * @param {number[]} nums
 * @return {number}  击败86%
 */
var removeDuplicates = function(nums) {
    var j = 0
    for (var i = 0; i < nums.length; i++) {
        if (j < 2 || nums[i] > nums[j-2]) {
            nums[j++] = nums[i]
        }
    }    
    return j
};
/**
 * @param {number[]} nums
 * @return {number} 击败44% 找到连续三个相等的数 删除最后一个 
 */
var removeDuplicates = function(nums) {
    var i = 0
    while (i+2 < nums.length) {
        while (nums[i] == nums[i+1]) {
            while (nums[i+1] == nums[i+2]) {
                nums.splice(i+2, 1)
            }
            i += 2
            if ( i >= nums.length - 2) {
                return i + 2
            }
        }
        i+=1
    }
    return i+2
};