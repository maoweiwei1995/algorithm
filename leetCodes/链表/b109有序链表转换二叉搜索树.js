/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 
 * 快慢指针法找到根值然后递归
 * 执行用时 :
100 ms
, 在所有 JavaScript 提交中击败了
97.83%
的用户
内存消耗 :
39 MB
, 在所有 JavaScript 提交中击败了
68.75%
的用户
 */
var sortedListToBST = function(head) {
    // 1.排异
    if (head === null) {
        return null
    }
    // 2.定义快慢指针
    let pre = null // 用于从中间截断链表
    let slow = head
    let fast = head
    let headleft = head
    // fast.next存在 才能引用 fast.next.next 不然会报错
    // 其实和fast没什么关系 之和slow有关
    while (fast !== null &&fast.next !== null) {
        // 记录截断位置 slow的前一个
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }
    let node = new TreeNode(slow.val)
    let headright = slow.next
    if (pre){
        pre.next = null
        node.left = sortedListToBST(headleft)
        node.right = sortedListToBST(headright)
    }
    // 创建树节点
    return node
};