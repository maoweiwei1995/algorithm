/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //异或
     var ret = 0 
     for ( var i = 0; i < nums.length+1; i++) {
          ret ^= i
     }
     for ( var i = 0; i < nums.length; i++) {
          ret ^= nums[i]
     }
     return ret
 };