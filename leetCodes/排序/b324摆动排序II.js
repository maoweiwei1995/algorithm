/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a, b) => {
       return a - b
    })
    let len = nums.length
    let arr = nums.slice(len/2)
    for (let i = 0; i < len/2; i++) {
        nums[2 * i] = nums[i]
    }
    for (let i = 0; i < len/2; i++) {
        nums[2 * i + 1] = arr[i]
    }
};
let nums = [1, 5, 1, 1, 6, 4]
wiggleSort(nums)
console.log(nums)
