/**摩尔投票法 一次遍历 时间：O(n) 空间:O(1)
 * @param {number[]} nums 
 * @return {number}
 */
var majorityElement = function(nums) {
    var ret = nums[0]
    var count = 1
    for(var i = 1 ; i < nums.length; i++) {
        if(ret !== nums[i]){
            count--
            if(count==0){
                ret = nums[++i]
                count++
            }
        } else {
            count++
        }
    }
    if(count>0){
        return ret
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var hash = {}
    var max = 0
    for(var i = 0; i < nums.length; i++) {
        if(hash[nums[i]]!==undefined) {
            hash[nums[i]]++
        } else {
                  hash[nums[i]] = 1  
        }
    }
    for(var i = 0; i < nums.length; i++) {
        if(hash[nums[i]]>nums.length/2){
            return nums[i]
        }
    }
};

//
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var hash = {}
    var max = 0
    for(var i = 0; i < nums.length; i++) {
        if(hash[nums[i]]!==undefined) {
            hash[nums[i]]++
        } else {
                  hash[nums[i]] = 1  
        }
    }
    for(var key in hash) {
        if(hash[key]>nums.length/2){
            return key
        }
    }
       
};