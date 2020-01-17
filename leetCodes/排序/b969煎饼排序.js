/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    let schema = []
    let len = A.length   // 数组未排序部分长度
    let max = 0
    while(len > 1) {
        max = 0
        // 内层循环找数组未排序部分最大值 记录下标为max
        for (let i = 1; i < len; i++) {
            if (A[max] < A[i]) {
                max = i
            }
        }
        // 翻转策略： 翻转两次
        // 1.以max+1为k翻转，把最大值送到数组头
        // 2.以未排序数组的长度为k把最大值翻转到数组未排序部分的末尾 然后数组未排序部分长度-1
        schema.push(max+1, len)
        overturn(A, max+1)
        overturn(A, len)
        len--
    }
    return schema
};

function overturn(arr, cnt) {
    for (let i = 0; i < (cnt-1)/2; i++) {
        [arr[i], arr[cnt - i - 1]] = [arr[cnt-i-1], arr[i]]
    }
}
// console.log(arr)

let arr = [3,2,4,1]
console.log(pancakeSort(arr))