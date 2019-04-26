/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 和我们平时解题的思路不一样，给我们的这个node就是链表的一部分，直接在上面操作就可以了，不要纠结为什么没有head。
 * 神奇的题目 本质上是删除了node的下一个节点 击败93%
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //1.把下一个节点的值赋值给目标节点
    node.val = node.next.val
    //2.删除下一节点
    node.next = node.next.next
};