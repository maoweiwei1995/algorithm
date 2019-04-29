/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var ans = []
    const dfs = cur => {
        if(!cur) {
            return
        }
        cur.children.forEach(item=>{
            dfs(item)
        })
        ans.push(cur.val)
    }
    dfs(root)
    return ans
};
