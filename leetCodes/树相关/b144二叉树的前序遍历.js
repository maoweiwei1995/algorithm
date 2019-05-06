/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代
 */
var preorderTraversal = function(root) {
    if(root == null) {
        return []
    }
    var stack = []
    var list  = []
    stack.push(root)
    while(stack.length !== 0) {
        var node = stack.pop()
        list.push(node.val)
        //先右入栈
        if(node.right){
            stack.push(node.right)
        }
        //后左入栈
        if(node.left){
            stack.push(node.left)
        } 
    }
    return list
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 常规方法 递归 关联前序、后序遍历 只要三行代码换换位置就行
 */
var ans = []
var inorderTraversal = function(root) {
    if(!root){
        return []
    }
    var ans = []
    iot(root,ans)
    return ans
};
function iot(root,ans) {
    if(!root){
        return null
    }
    ans.push(root.val)
    iot(root.left,ans)
    iot(root.right,ans)
}