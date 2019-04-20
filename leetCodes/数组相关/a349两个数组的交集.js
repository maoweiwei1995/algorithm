/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //哈希表
    var hash = {}
    var ans = []
    for (var i = 0; i < nums1.length; i++) {
        if (hash[nums1[i]]==undefined) {
            hash[nums1[i]] = 1
        }
    }
    for (var i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]] !== undefined) {
            hash[nums2[i]] += 1
        }
    }
    for (var key in hash) {
        if (hash[key] !== 1)
        ans.push(key)
    }
    return ans
    
};