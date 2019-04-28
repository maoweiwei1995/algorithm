/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 递归
 */
var removeElements = function(head, val) {
    //1.终止条件
    if (!head) {
        return null
    }
    head.next = removeElements(head.next, val)
    return head.val == val ? head.next : head
};