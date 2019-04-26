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
 * 递归
 */
var swapPairs = function(head) {
    //1.终止条件
    if (head == null || head.next == null) {
        return head
    }
    //2.操作 交换链表元素
    var n = head.next
    head.next = swapPairs(n.next)
    n.next = head
    //3.返回值
    return n
};