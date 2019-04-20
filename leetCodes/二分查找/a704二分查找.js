/**
 * @param {number[]} nums  超时？
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left = 0, right = nums.length-1
    while(left <= right) {
        middle = (left+right)/2
        if (target == nums[middle]) {
            return middle
        } else if (target > nums[middle]) {
            left = middle -1
        } else {
            right = middle+1 
        }
    }
    return -1
};
console.log(search([1,2,3,4,5,6,7,8,9], 4))