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
 */
var isPalindrome = function(head) {
    if (head == null || head.next == null) {
        return true
    }    
//1.快慢指针找到中间节点
    var s = head
    var f = head.next
    while (f) {
            s = s.next
            f = f.next? f.next.next:f.next
    }
//2.逆转链表后半部分
    var p = null
    var c = s
    var n = null
    while (c) {        
        n = c.next
        c.next = p 
        p = c
        c = n
    }
//3.比较前半段和后半段是否相同    
    while (head !== null && p !== null) {
        if (head.val !== p.val) {
            return false
        }
        head = head.next
        p = p.next
    }
    return true
};