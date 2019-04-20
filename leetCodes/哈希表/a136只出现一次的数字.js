/** 哈希表 按链表顺序遍历 如果一个节点被遍历两次说明有环
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var hash = {}
    while(head !== null) {
        if (hash[head] !== null) {
            return true
        } else {
           hash[head] = 1
        }
        head = head.next
    }
    return false
};


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null || head == undefined||head.next == null || head.next == undefined){
        return false
    }
    var slow = head
    var fast = head.next
    while(slow !== fast ) {
        if(slow == null || fast == null) {
            return false
        }
        slow = slow.next
        fast = (fast.next).next
    } 
    return true
};