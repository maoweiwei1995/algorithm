/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let x = matrix.length
    let y = matrix[0].length
    let arr = []
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            arr.push(matrix[i][j])
        }
    }
    heapSort(arr)
    return arr[k-1]
};


function heapSort(arr) {
    // 1.根据数组构造一个大顶堆
    heapInsert(arr)
    let size = arr.length
    while (size > 1) {
        // 交换堆顶最大元素 和 堆尾元素
        swap(arr, 0, size-1)
        // 堆大小-1
        size--
        // 重新构造大顶堆
        heapify(arr, 0, size)
    }
}
// 最初用来从数组生成一个堆
function heapInsert(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let cur = i
        let father = Math.floor((cur-1)>>1)
        while (arr[father] < arr[cur]) {
            swap(arr, father, cur)
            cur = father
            father = Math.floor((cur-1)>>1)
            if (father < 0) {
                break
            }
        }
    }
}
// 交换两个数组元素
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 重建堆
function heapify(arr, index, size) {
    let left = 2 * index + 1
    let right = 2 * index + 2
    let max = 0
    while (left < size) {
        if (right < size && arr[left] < arr[right]) {
            max = right
        } else {
            max = left
        }
        if (arr[max] < arr[index]) {
            max = index
        }
        if (max == index) {
            break
        }
        swap(arr, max, index)
        index = max
        left = 2 * index + 1
        right = 2 * index + 2
    }
}
let arr = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
 ]
 console.log(kthSmallest(arr, 8))