/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var ans = []
    //取反
    for (var i = 0; i < nums.length; i++) {
        //保证索引为正 因为可能被之前取反给变成负的了
        var index = Math.abs(nums[i])-1
        if (nums[index]>0){
            nums[index] *= -1
        }
    }
    //找出>0的值的索引
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans.push(i+1)
        }
    }
    return ans
};