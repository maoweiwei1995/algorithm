/**
 * @param {number[]} nums
 * @return {number}
 * 额外空间
 */
var singleNumber = function(nums) {
    let hash = {}
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (!hash[nums[i]]){
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    } 
    for(let key in hash){
        if (hash[key] == 1){
            return key
        }
    }
};