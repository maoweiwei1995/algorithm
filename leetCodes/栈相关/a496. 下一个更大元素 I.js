/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 通过Stack、HashMap解决

先遍历大数组nums2，首先将第一个元素入栈；
继续遍历，当当前元素小于栈顶元素时，继续将它入栈；当当前元素大于栈顶元素时，栈顶元素出栈，此时应将该出栈的元素与当前元素形成key-value键值对，存入HashMap中；
当遍历完nums2后，得到nums2中元素所对应的下一个更大元素的hash表；
遍历nums1的元素在hashMap中去查找‘下一个更大元素’，当找不到时则为-1。
 */
var nextGreaterElement = function(nums1, nums2) {
    var hash = []
    var stack = []
    ans = []
    for(i in nums2){
        while(stack.length !=0 && stack[stack.length-1] < nums2[i]){
                    hash[stack.pop()] = nums2[i]
        }
        stack.push(nums2[i])

    }
    
    for(var j in nums1){
        if(hash[nums1[j]]){
            ans.push(hash[nums1[j]])           
        } else{
            ans.push(-1)
        }
    }
    return ans
};