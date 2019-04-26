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
 * 递归
 */
var deleteDuplicates = function(head) {
    //1.终止条件
    if (head == null || head.next == null) {
        return head
    }
    //2.操作
     head.next = deleteDuplicates(head.next)
    //3.返回值
     if (head.val == head.next.val) {
         head = head.next
     }
    return head
};
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
 * 常规操作 一个一个比较 返回头结点
 */
var deleteDuplicates = function(head) {
    var ans = head
    while (head && head.next) {
        if (head.val == head.next.val) {
            if (head.next.next) {
                head.next = head.next.next
            } else {
                head.next = null
            }
        } else {
            head = head.next
        }
    }
    return ans
};