/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 快慢指针  注意终止条件 防止fast指针为null
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }
    var s = head
    var f = head.next
    while(f != s) {
        if (f == null || f.next == null) {
            return false
        }
        s = s.next
        f = f.next.next
    }
    return true
};