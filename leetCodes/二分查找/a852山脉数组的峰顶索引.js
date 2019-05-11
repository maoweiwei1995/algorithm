/**
 * @param {number[]} A
 * @return {number}
 * 二分查找
 *选择左右指针的中间数，如果它的值比左边小就舍弃右半边的元素，比右边小就舍弃左边的元素，
 *它比两边都大那它就是山峰
 */
var peakIndexInMountainArray = function(A) {
    let l = 0
    let r = A.length-1
    while(l <= r){
        m = l + ((r-l)>>1)
        if (A[m] > A[m-1]){
            if(A[m] > A[m+1]){
                return m                
            } else{
                l = m + 1
            }
        } else {
            r = m - 1 
        }
    }
};
/**
 * @param {number[]} A
 * @return {number}
 * 击败53% 不是二分查找
 */
var peakIndexInMountainArray = function(A) {
    let i = 0
    while(A[i] < A[i+1]){
        i++
    }
    return i
};