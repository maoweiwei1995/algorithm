/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    // 长度为1的特例
    if (head === null && m === n) {
        return head
    }
    let pre = null
    let mPre1 = null
    let mPre2 = null
    let i = 0
    let nullhead = new ListNode(0)
    nullhead.next = head

    let cur = nullhead
    
    while (i < m) {
        i++
        mPre1 = cur
        cur = cur.next
    }
    mPre2 = cur

    while (i <= n) {
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
        i++
    }
    mPre2.next = cur
    mPre1.next = pre
    return nullhead.next
};