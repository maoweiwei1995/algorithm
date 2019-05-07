/**
 * @param {number} n
 * @return {number}
 * 结题思路：假设n个节点存在二叉排序树的个数是G(n)，1为根节点，2为根节点，...，n为根节点，
 * 当1为根节点时，其左子树节点个数为0，右子树节点个数为n-1，同理当2为根节点时，其左子树
 * 节点个数为1，右子树节点为n-2，所以可得G(n) = G(0)*G(n-1)+G(1)*(n-2)+...+G(n-1)*G(0)
 */
var numTrees = function(n) {
    var dp = []
    dp[0] = 1
    dp[1] = 1
    for (var i = 2; i < n+1; i++ ) {
        dp[i] = 0
        for(var j = 1; j < i + 1; j++){
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
 };