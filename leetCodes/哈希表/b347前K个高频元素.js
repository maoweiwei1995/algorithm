/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 先统计 后循环遍历
 */
// var topKFrequent = function(nums, k) {
//     let hash = []
//     let res = []
//     for (let i = 0, len = nums.length; i < len; i++) {
//         if (!hash[nums[i]]) {
//             hash[nums[i]] = 1
//         } else {
//             hash[nums[i]]++
//         }
//     }
//     console.log(hash)
//     for (let i = 0; i < k; i++) {
//         let maxI = 0
//         for (let x in hash) {
//             if ((hash[maxI] || 0) < hash[x]) {
//                 maxI = x
//             }
//         }
//         res.push(parseInt(maxI))
//         hash[maxI] = -1
//     }
//     // console.log(res)
//     return res
// };



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = []
    nums.forEach( num => {
        hash[num]? hash[num]++ : hash[num] = 1
    })
    return Object.keys(hash).sort((a, b) => hash[b] - hash[a]).slice(0, k)
};

let nums = [1,1,1,2,2,3]
topKFrequent(nums, 1)

