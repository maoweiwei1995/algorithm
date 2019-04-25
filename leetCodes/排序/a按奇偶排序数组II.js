/**
 * @param {number[]} A
 * @return {number[]} 击败75%
 */
var sortArrayByParityII = function(A) {
    //双指针 分奇偶交换元素
   var i = 0, j = 1
   var len = A.length
   var temp = 0
   while (i < len) {
       if (i % 2 == 0 && A[i] % 2 !== 0) {
           // 找到下一个误排的偶数
           while (A[j] % 2 == 1 || j % 2 == 0) {
                j++
           }
           // 找到后交换
           temp = A[i]
           A[i] = A[j]
           A[j] = temp
   
       }        
       i++
       j = i + 1 
       if (i % 2 == 1 && A[i] % 2 !== 1) {
           // 找到下一个误排的奇数
           while (A[j] % 2 == 0 || j % 2 == 1) {
                j++
           }
           // 找到后交换
           temp = A[i]
           A[i] = A[j]
           A[j] = temp
       }  
       i++
       j = i + 1 
   }
    return A
};
/**
 * @param {number[]} A
 * @return {number[]} A[0] = 偶数 A[1] = 奇数
 * 暴力解 先把偶数提取再
 */
var sortArrayByParityII = function(A) {
    //双指针
    
    var len = A.length
    var i = len-1
    var temp = []
    var ans = []
    while (i >= 0) {
        if (A[i] % 2 == 0) {
           temp.push(A.splice(i, 1))
        }
        i--
    } 
    i = 0
    while (i < len/2) {
        ans.push(temp[i])
        ans.push(A[i++])
    }
    return ans
};