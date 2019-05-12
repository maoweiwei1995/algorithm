/**
 * @param {number[]} nums
 * @return {number[]}
 * 记录下标普适性更好
 */
var nextGreaterElements = function(nums) {
    let len = nums.length
    let s = []
    let hash = []
    for(let i = 0; i < 2 * len; i++){
        while(s.length !== 0 && nums[s[s.length-1]] < nums[i%len]){
            hash[s.pop()] = i % len
        }
        if (i < len ){
            s.push(i)
        }
    }
    for(let j = 0; j < len; j++){
        if(hash[j] == undefined){
            hash[j] = -1
        } else{
            hash[j] = nums[hash[j]]
        }
    }
    return hash
};