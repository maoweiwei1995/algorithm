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
 * 迭代方法 用栈实现
 */
var inorderTraversal = function(root) {
    if(!root){
        return []
    }
    var list = []
    var stack = []
    var cur = root
    while(cur !== null || stack.length !== 0) {
        if(cur !== null) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            list.push(cur.val)
            cur = cur.right
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
    iot(root.left,ans)
    ans.push(root.val)
    iot(root.right,ans)
}