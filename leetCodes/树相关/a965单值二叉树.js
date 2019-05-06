/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 递归
 */
var isUnivalTree = function(root) {
    if(root === null){
        return true
    }
    return same(root,root.val)
};

function same(root,val) {
    if(!root){
        return true
    }
    return (root.val == val) && same(root.left,val) && same(root.right,val)
}
