/**
 * @param {number[]} nums
 * @return {boolean}
 * 思路分析： 这道题得采用贪心策略，就是使序列尽可能的长。蛋式这种策略好像给人一种错误的感觉，
比如[1,2,3,3,4,5]，如果采用此策略，将会是[1,2,3,4,5]和剩余的[3]。其实这个策略并不是这么简单的，
比如它扫描到’1’的时候，由于它的前一个元素’0’不存在以’0’结尾的连续子序列，所以它这是向后寻找两个元素，
凑成子序列[1,2,3]（这时1，2，3各被消耗了一个）。接着我们就应该访问到’3’，我们又去查询以’2’结尾的
有没有合法的连续序列，但是没有，所以它此时只能向后寻找两个元素，
凑出连续子序列[3,4,5]（3，4，5个被消耗了一次），结束访问。

如果输入[1,2,3,3,4,4,5,5]，刚开始访问'1'，建立[1,2,3]，
接着访问'3'，建立[3,4,5]
接着访问'4'，由于第一步建立了[1,2,3]以4 - 1结尾的连续子序列，所以它放入，得到[1,2,3,4]
接着访问'5'，由于第一步建立了[1,2,3,4]以5 - 1结尾的连续子序列，所以它放入，得到[1,2,3,4,5]

注意判断hashEnd是否存在
 * 
 */
var isPossible = function(nums) {
    let hashEnd = {}
    let hash = {}
    let len = nums.length
    // 统计数字个数
    for (let i = 0; i < len; i++) {
        hash[nums[i]]? hash[nums[i]]++ : hash[nums[i]] = 1
    }
    for (let i = 0; i < len; i++) {
        if (hash[nums[i]] == 0) {
            continue
        }
        hash[nums[i]]--
        // 向前寻找以nums[i]-1结尾的长度大于等于3的序列
        if (hashEnd[nums[i]-1] && hashEnd[nums[i]-1] > 0) {
            hashEnd[nums[i]-1]--
            hashEnd[nums[i]]? hashEnd[nums[i]]++ : hashEnd[nums[i]] = 1
        // 向后寻找 nums[i]+1 和 nums[i]+2 以组成长度大于等于3的序列
        } else if (hash[nums[i]+1] && hash[nums[i]+1] > 0 && hash[nums[i]+2] && hash[nums[i]+2] > 0) {
            hash[nums[i]+1]--
            hash[nums[i]+2]--
            hashEnd[nums[i]+2]? hashEnd[nums[i]+2]++ : hashEnd[nums[i]+2] = 1
        // 都没找到则返回false
        } else {
            return false
        }
    }
    return true
};
let arr = [1,2,3,3,4,4,5,5]
// let arr = [1,2,3,3,4,5]
console.log(isPossible(arr))