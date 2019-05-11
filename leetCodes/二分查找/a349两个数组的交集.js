/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 排序后双指针
 */
var intersection = function(nums1, nums2) {
    //排序
    nums1.sort((a,b)=>{
        return a - b
    })
    nums2.sort((a,b)=>{
        return a - b
    })
    let i = 0, j = 0
    let len1 = nums1.length
    let len2 = nums2.length
    let ans = []
    let hash = []
    while(i < len1 && j < len2 ){
        if(nums1[i] == nums2[j]){
            if(hash[nums1[i]] == undefined){
                ans.push(nums1[i])
                hash[nums1[i]] = 1   
            }
            i++
            j++  
        } else if(nums1[i] < nums2[j]) {
            i++
        } else{
            j++
        }
    }
    return ans
    
};
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