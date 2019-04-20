/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var hash = new Array(nums.length+1)
    var ans = []
    hash[0] = 1
    hash.fill(0,1,nums.length+1)
    nums.forEach(item => {
            hash[item]++
    })
    for(var i = 0; i < nums.length+1; i++){
        if(hash[i] == 2){
            ans[0] = i
        }
        if(hash[i] == 0){
            ans[1] = i
        }
    }
    return ans
};
console.log(findErrorNums([2,2]))