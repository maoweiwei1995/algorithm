/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var ret = 0;
    for (var i = 0; i < nums.length;) {
        //找到第一个1
        while (nums[i] !== 1) {
            i++
            if(i>=nums.length){
                return max
            }
        } 
        //找到了
        while (nums[i++] === 1) {
            ret++
        }
        if (max < ret){
            max = ret 
        }
        ret = 0
    }
    return max
};