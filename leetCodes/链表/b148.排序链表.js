/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 用的是堆排序原理
 * 1先把链表转化为数组
 * 2再用堆排序
 * 3再转化为链表
 * ps：注意保存链表首节点
 * 执行结果：
通过
显示详情
执行用时 :
132 ms
, 在所有 JavaScript 提交中击败了
93.24%
的用户
内存消耗 :
40.4 MB
, 在所有 JavaScript 提交中击败了
61.76%
的用户
 */
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

var sortList = function(head) {
 //1.转化为数组
 let arr = []
 let temp = head
 while(head){
   arr.push(head.val)
   head = head.next
 }  

 //2.处理
 heapSort(arr)

 //3.转化为链表
 let temp2 = temp
 for (let i = 0, len = arr.length; i<len;i++) {
   temp.val = arr[i]
   temp = temp.next
 }
 return temp2
};