/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 三指针迭代 击败93%
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 递归 击败77%
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    var p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
};
 /**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var pre = null
    var cur = head
    var next = null
    while (cur !== null) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next 
    }
    return pre
};
/**
 * Definition for singly-linked list.  迭代
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var pre = null
    var cur = null
    var next = null
    pre = head
    if (pre == null) {
        return null
    }
    cur = pre.next
    if (cur == null) {
        return pre
    }
    next = cur.next
    pre.next = null
    while (next !== null) {
        cur.next = pre
        pre = cur
        cur = next 
        next = cur.next
    }
    cur.next = pre
    return cur
};