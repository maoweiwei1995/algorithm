
/**a104 
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
// var maxn
// function dfs(node,depth) {
//     if(node == null) {
//         maxn = Math.max(maxn,depth)
//         return 
//     }
//     dfs(node.left,depth+1)
//     dfs(node.right,depth+1)
// }
// var maxDepth = function(root) {
//      maxn = -1;
//     dfs(root,0);
//     return maxn
// };

function maxh(treeNode){
    return treeNode == null ? 0 : Math.max(maxh(treeNode.left), maxh(treeNode.right))+1 
}