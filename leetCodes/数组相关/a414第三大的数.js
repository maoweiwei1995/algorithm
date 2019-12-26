/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let len = nums.length
    let max1 = Number.MIN_VALUE
    let max2 = Number.MIN_VALUE
    let max3 = Number.MIN_VALUE
    let i = 0

    while(i < len) {
        if(nums[i] == max1 || nums[i] == max2 || nums[i] == max3){
            i++
            continue
        }
        if (max1 == Number.MIN_VALUE || nums[i] > max1) {
            max3 = max2
            max2 = max1
            max1 = nums[i]
        } else if (max2 == Number.MIN_VALUE || nums[i] > max2) {
            max3 = max2
            max2 = nums[i]
        } else if (max3 == Number.MIN_VALUE || nums[i] > max3) {
            max3 = nums[i]
        }
        i++
    }
    if (max3 == Number.MIN_VALUE) {
        return max1
    } 
    return max3
};
let nums = [2, 2, 3, 1]
console.log(thirdMax(nums))