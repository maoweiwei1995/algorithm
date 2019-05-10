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
 * @return {number}
 * 双重递归
 */
var pathSum = function(root, sum) {
    var count = 0
    dfs(root,sum)
    return count
    function dfs(root,sum){
        if(!root){
            return
        }
        s(root,sum)
        dfs(root.left,sum)
        dfs(root.right,sum)    
    }
    function s(root,sum){
        if(!root){
            return
        }
        sum -= root.val
        if(sum == 0){
                count++
        }
        s(root.left,sum)
        s(root.right,sum)
    }
};


// 栈方法
var pathSum = function(root, sum) {
    if(!root) return 0;
    let count = 0;
    let stack = [];
    let dfs = function(root, cur) {
            //当前路径和等于从根节点到此节点的val和
            let curSum = cur + root.val;
            //遍历栈，子路径和等于根到此节点的路径和 - 根到父节点的路径和
            if(curSum === sum) count++;
            for(let i = 0 ; i < stack.length; i++) {
                if(curSum - stack[i] === sum)
                count++;
            }
            //当前路径和入栈备用
            stack.push(curSum);
            //用完了就弹出
            if(root.left) {
                dfs(root.left, cur + root.val)
                stack.pop()
            }
            if(root.right) {
                dfs(root.right, cur + root.val)
                stack.pop();
            }
    }
    dfs(root, 0);
    return count;
};