/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 思路：先用二分法找到该元素
 * 再从该元素向两边延展获取left 和right
 */
var searchRange = function(nums, target) {
    let l = 0
    let r = nums.length-1
    if (l == r && nums[l] == target) {
        return [0, 0]
    }
    let start = 0
    let end = 0
    let mid = Math.floor((l+r)>>1)
    while(l < r){
        mid = Math.floor((l+r)>>1)
        if (r - l == 1) {
            if (nums[l] == target){
                if (nums[r] == target) {
                    return [l, r]
                } else {
                    return [l, l]
                }
            } else if (nums[r] == target){
                if (nums[l] == target) {
                    return [l, r]
                } else {
                    return [r, r]
                }
            } else {
                return [-1, -1]
            }
        }
        if (nums[mid] < target) {
            if (l == mid){
                return [-1, -1]
            } else {
                l = mid
            }
        } else if (nums[mid] > target) {
            if (r == mid) {
                return [-1, -1]
            } else {
                r = mid
            }
        } else {
            start = mid
            end = mid
            while(nums[start] == target) {
                start--
            }
            while(nums[end] == target) {
                end++
            }
            return [start+1, end-1]
        }
    }
    return [-1, -1]
};
let nums = [5,7,7,8,8,10]
console.log(searchRange(nums, 8))