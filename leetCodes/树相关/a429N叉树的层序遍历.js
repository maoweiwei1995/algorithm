/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var ans = []
    var ansL = []
    var queue = []
    var count = 0
    if (!root) {
        return []
    }
    queue.push(root)
    while(queue.length !== 0) {
        count = queue.length
        ans = []
        while(count>0) {
            var node = queue.shift()
            node.children.forEach(item=>{
                queue.push(item)
            })
            ans.push(node.val)
            count--
        }
        ansL.push(ans)
    }
    return ansL
};