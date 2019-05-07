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
 */
//返回是否是平衡的和高度两种信息
function ReturnNode(depth, isB) {
    this.isB = isB
    this.depth = depth
}
var isBalanced = function(root) {
    return isBST(root).isB
};
function isBST(root){
    if (!root) {
        return new ReturnNode(0,true)
    }
    //不平衡的三种情况
    //1.左子树不平衡
    var left = isBST(root.left)
    //1.右子树不平衡
    var right = isBST(root.right)
    if(left.isB == false || right.isB == false) {
        return new ReturnNode(0,false)
    }
    //左右高度差>1
    if(Math.abs(left.depth - right.depth) > 1) {
        return new ReturnNode(0,false)
    }
    //平衡了
    return new ReturnNode(Math.max(left.depth, right.depth) + 1, true)
}