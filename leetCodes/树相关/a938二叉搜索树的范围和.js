/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 * 二叉搜索树已排序 注意分类讨论判断大小 减少运算量
 */

var rangeSumBST = function(root,L,R) {    
    if (!root) {
        return 0
    }
    if (root.val > R) {
        return rangeSumBST(root.left,L,R)
    } else if(root.val < L) {
        return rangeSumBST(root.right,L,R)
    } else {
        return root.val + rangeSumBST(root.left,L,R)+rangeSumBST(root.right,L,R)
    }
};
