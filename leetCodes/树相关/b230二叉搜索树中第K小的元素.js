/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 中序遍历的应用 中序遍历的二叉搜索树是从小到大排列的
 */
var kthSmallest = function(root, k) {
    if(root == null){
        return null
    }
    var ans = []
    ino(root,ans)
    return ans[k-1]

};    
function ino(root,ans){
        if(!root){
            return null
        } 
        ino(root.left,ans)
        ans.push(root.val)
        ino(root.right,ans)
    }