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
 * 执行用时 :
92 ms
, 在所有 JavaScript 提交中击败了
95.65%
的用户
内存消耗 :
36.5 MB
, 在所有 JavaScript 提交中击败了
14.29%
的用户
 */
var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let odd = head
    let even = head.next
    let evenHead = even
    while (even && even.next) {
        odd.next = even.next
        even.next = even.next.next
        odd = odd.next
        even = even.next
    }
    odd.next = evenHead
    return head
};