// swap
function swap(arr, i, j) {
     [arr[i], arr[j]] = [arr[j], arr[i]]
}

function shiftDown(arr, i, length) {
  let temp = arr[i]
   for (let j = 2*i+1; j < length; j = 2*j+1) {
     temp = arr[i]
     if (j+1<length && arr[j] < arr[j+1]) {
       j++
     }
     // 判断大小
     if (temp < arr[j]) {
       swap(arr, i, j)
       // 新的i
       i = j
     } else {
       break
     }
   }
}

function heapSort(arr) {
  // 初始化大顶堆
  for (let i = Math.floor(arr.length/2 -1); i>=0; i--) {
    shiftDown(arr, i, arr.length)
  }
  // 排序每一次for循环找出一个最大值 交换后 数组-1
  for (let i = arr.length-1; i > 0; i--) {
    swap(arr, 0, i)
    shiftDown(arr, 0, i)
  }
}

let arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2]
heapSort(arr)
console.log(arr)