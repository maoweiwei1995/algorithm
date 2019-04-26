/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} 递归 击败83%
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} 击败83%
 */
var mergeTwoLists = function(l1, l2) {
    var lt1 = {} ,lt2 = {}
    var lt = null
    var head = null
    if (l1 && l2) {
        if (l1.val <= l2.val) {
            lt = new ListNode(l1.val)
            l1 = l1.next
        } else {
            lt = new ListNode(l2.val)
            l2 = l2.next
        }
        head = lt
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
            var lt1 = new ListNode(l1.val)
            lt.next = lt1
            lt = lt1
            l1 = l1.next
        } else {
            var lt2 = new ListNode(l2.val)
            lt.next = lt2
            lt = lt2
            l2 = l2.next
            }
        }
        if (l1 !== null) {
            lt.next = l1
        } else {
             lt.next = l2
        }
            return head
    } else {
        return l1 || l2
    }

};