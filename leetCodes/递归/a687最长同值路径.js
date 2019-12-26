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
var longestUnivaluePath = function(root) {
    let maxL = 0
    if (root === null) {
        return 0
    }
    let getMaxL = (node, val) => {
        if (node === null) {
            return 0
        }
        let left = getMaxL(node.left, node.val)
        let right = getMaxL(node.right, node.val)
        maxL = Math.max(maxL, left + right)
        if (node.val === val) {
            return Math.max(left, right) + 1
        } else {
            return 0
        }
    };
    getMaxL(root, undefined)
    return maxL
    
}