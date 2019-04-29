/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0
    }
    if (!root.left) {
        return minDepth(root.right)+1
    }
    if (!root.right) {
        return minDepth(root.left)+1
    }
    var left = minDepth(root.left)
    var right = minDepth(root.right)
    return left>right? right+1:left+1
};
