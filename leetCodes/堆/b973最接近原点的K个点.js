/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    heapSort(points)
    return points.slice(0, K)
};
// 计算距离
function cal(tar) {
    return tar[0] * tar[0] + tar[1] * tar[1]
}
// 交换数组的两个元素
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 初始化堆
function heapInsert(arr) {
    let len = arr.length
    let fa = 0
    let cur = 0
    for (let i = 1; i < len; i++) {
        cur = i
        fa = Math.floor((cur-1)>>1)
        while (cal(arr[cur]) > cal(arr[fa])) {
            swap(arr, cur, fa)
            cur = fa
            fa = Math.floor((cur-1)>>1)
            if (fa < 0) {
                break
            }
        }
    }
}
// 重建堆
function heapify(arr, index, size) {
    let left = 2 * index + 1
    let right = 2 * index + 2
    while (left < size) {
        let max = 0
        if (right < size && cal(arr[left]) < cal(arr[right])) {
            max = right
        } else {
            max = left
        }
        if (cal(arr[max]) < cal(arr[index])) {
            max = index
        }
        if (index === max) {
            break
        }
        swap(arr, index, max)
        index = max
        left = 2 * index + 1
        right = 2 * index + 2
    }
}
function heapSort(arr){
    heapInsert(arr)
    let size = arr.length
    while(size > 1) {
        swap(arr, 0, size-1)
        size--
        heapify(arr, 0, size)
    }
}