/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let cur = head
    let len = 0
    let cnt = 0
    while(cur) {
        len++
        cur = cur.next
    }
    if (len == 0 || len == 1){
        return null
    }
    // 删除的是链表头
    if (len == n) {
        return head.next
    }
    
    cnt = len - n - 1
    cur = head
    while (cnt--) {
        cur = cur.next
    }
    cur.next = cur.next.next
    return head
};