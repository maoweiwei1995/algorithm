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
 */
var middleNode = function(head) {
    //1.快慢指针
     var s = head
     var f = head
     while ( f && f.next) {   //f==null的时候 去取得f的属性 会报错
         s = s.next
         f = f.next.next 
     }
     return s
 };