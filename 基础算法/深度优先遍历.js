//利用栈的特点
var dfs = function(root) {
    var ans = []
    var stack = []
    if (!root) {
        return []
    }
    stack.push(root)
    while(stack.length !== 0) {
        var node = stack.pull()
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
        ans.push(node.val)
    }
    return ans
}
