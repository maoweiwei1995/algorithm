/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res = []
    findPath(root,"",res)
    return res
};
function findPath(root, path, res){
    if(root == null) return
    if(!root.left && !root.right){
        res.push(path + root.val)
    }
    var p = path + root.val + "->"
    findPath(root.left, p, res)
    findPath(root.right, p, res)
}