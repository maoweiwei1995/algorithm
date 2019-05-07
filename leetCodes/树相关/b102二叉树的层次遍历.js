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
 * 队列实现 本质是广度优先搜索
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    var ans = []
    var ansL = []
    var queue = []
    queue.push(root)
    var count = 0
    while(queue.length !== 0) {      
        count = queue.length  
        ans = []
        while (count > 0) { 
            var node = queue.shift()
            if (node.left) {
            queue.push(node.left)
            }
            if (node.right) {
            queue.push(node.right)
            }
            ans.push(node.val)
            count--
        }            
        ansL.push(ans)
    }
    return ansL
};