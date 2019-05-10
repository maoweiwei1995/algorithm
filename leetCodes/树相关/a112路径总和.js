/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 * 推荐这种
 */
var hasPathSum = function(root, sum) {
    return hps(root,sum)
};
function hps(root,sum){
    if(!root){
        return false
    }
    sum -= root.val
    if(root.left==null && root.right==null){
        return sum == 0
    }
    return hps(root.left,sum) || hps(root.right,sum)

}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 * 逻辑关系是 或 有一个满足就返回true
 */
var hasPathSum = function(root, sum) {
    if(!root){
        return false
    }
    var temp = 0
    return hps(root,temp,sum)
    
};

function hps(root,total,sum){
    if(!root){
        return null
    }
    
    total += root.val
    if(!root.left && !root.right){
        return total === sum
    }
    if(root.left && root.right){
        return hps(root.left,total,sum) || hps(root.right,total,sum)
    }
    if(root.right){
        return hps(root.right,total,sum)
    }
    if(root.left){
        return hps(root.left,total,sum)
    }
}