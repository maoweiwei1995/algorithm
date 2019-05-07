// 利用队列的特点 二叉树
var wfs = function(root) {
    var ans = []
    var queue = []
    if (!root) {
        return []
    }
    queue.push(root)
    while(queue.length !== 0) {
        var node = queue.shift()
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
        ans.push(node.val)
    }
    return ans
}