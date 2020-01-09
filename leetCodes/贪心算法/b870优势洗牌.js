/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    let len = A.length
    let res = []
    let j = 0
    // 1.对A从小到大排序
    A.sort((a, b) => a - b)
    // 2.对B的每个元素 从A中选择最小的符合条件的元素，找到后然后从A中删去该元素 把该元素放到新数组对应位置上
    for (let i = 0; i < len; i++) {
        j = 0
        while (j < A.length && A[j] <= B[i]) {
            j++
        }
        if (A[j] > B[i]) {
            res[i] = A[j]
            A.splice(j, 1)
        }
    }
    j = 0
    // 3.剩余元素随便填入。
    for (let i = 0; i < len; i++) {
        if (!res[i]) {
            res[i] = A[j++]
        }
    }
    return res
};
let A = [2,7,11,15], B = [1,10,4,11]
console.log(advantageCount(A, B))