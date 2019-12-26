/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = {}
    backtrack(nums, result, [], 0, nums.length, target)
    return Object.keys(result).map(item => {
        item = item.split(',')
        item = item.map(num=> parseInt(num))
        return item
    })
};

function backtrack(nums, result, temp, start, end, target){
    if (temp.length === 4) {
        let temp2 = temp.concat()
        temp2.sort((a, b) => a - b) 
        if (!result[temp2]){
            let total = temp2.reduce((sum, cur) => {
                return sum + cur
            })
            if (total == target){
                result[temp2] = 1
            }
        }
        return 
    }
    for (let i = start; i < end;i++){
        temp.push(nums[i])
        backtrack(nums, result, temp, i+1, end, target)
        temp.pop()
    }
}
let nums = [1, 0, -1, 0, -2, 2], target = 0
console.log(fourSum(nums, target))