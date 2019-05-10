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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var ans = []
    var temp = []
    ps(root,sum,temp,ans)
    return ans
};

function ps(root,sum,temp,ans){
    if(!root){
        return null
    }
    sum -= root.val
    var newtemp = temp.slice(0)
    newtemp.push(root.val)
    if(!root.left && !root.right){
        if(sum === 0){
            ans.push(newtemp)
        }
    }
    ps(root.left,sum,newtemp,ans)
    ps(root.right,sum,newtemp,ans)
}