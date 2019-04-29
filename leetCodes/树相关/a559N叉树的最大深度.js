/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    return root==null? 0:dfs(root)
};

function dfs(cur) {
    if(!cur){
        return 0
    }
    var max = 1
    cur.children.forEach(item=>{
        max = Math.max(max,dfs(item)+1)
    })
    return max
}