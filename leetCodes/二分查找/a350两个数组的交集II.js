/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 思路排序 然后双指针
 */
var intersect = function(nums1, nums2) {
    //1.排序
    nums1.sort((a, b) => a-b)
    nums2.sort((a, b) => a-b)
    let len1 = nums1.length
    let len2 = nums2.length
    let i = 0
    let j = 0
    let arr = []
    //2.双指针遍历
    while(i < len1 && j < len2) {
        if (nums1[i] == nums2[j]) {
            arr.push(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]){
            i++
        } else {
            j++
        }
    }
    return arr
};

let nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersect(nums1, nums2))