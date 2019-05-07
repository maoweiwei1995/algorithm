/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 队列方法 广度优先搜索 unshift
 */
var levelOrderBottom = function(root) {
    var ansL = []
    var ans = []
    var count = 0
    if (!root){
        return [] 
    }
    var queue = []
    queue.push(root)
    while(queue.length !== 0) {
        count = queue.length
        ans = []
        while(count>0) {
            var node = queue.shift()
            if(node.left) {
               queue.push(node.left)
            }
            if(node.right) {
               queue.push(node.right)
            }
            ans.push(node.val)
            count--
        }
        ansL.unshift(ans)
    }
    return ansL
};