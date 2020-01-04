/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    nums.sort((a, b) => a - b)
    let len = nums.length
    let i = 0
    let arr = []
    while (i < len) {
        if (arr.length == 0) {
            arr.push(nums.shift())
            i++
        } else {
            while (i < len && nums[i] !== arr[arr.length-1] + 1) {
                i++
            }
            if (i < len) {
                arr.push(nums[i])
                nums.splice(i, 1)
                if (arr.length == k) {
                    arr = []
                }
            } else {
                return false
            }
        }
        len = nums.length
        i = 0
    }
    if (arr.length > 0) {
        return false
    }
    return true
};
let nums = [1,2,3,4], k = 3
console.log(isPossibleDivide(nums, k))