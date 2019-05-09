/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if(!pre || !post){
        return null
    }
    return cfpp(pre,post,0,pre.length-1,0,pre.length-1)
};
function cfpp(pre,post,prel,prer,postl,postr){
    if(prel>prer || postl>postr){
        return null
    }
    if(prel==prer || postl==postr){
        return new TreeNode(pre[prel])
    }
    var node = new TreeNode(pre[prel])
    var i = post.indexOf(pre[prel+1])
    //pre
    var prell = prel+1
    var prelr = i + 1 + (prel-postl)
    var prerl = i + 2 + (prel-postl)
    var prerr = prer
    //post
    var postll = postl
    var postlr = i
    var postrl = i+1
    var postrr = postr-1
    node.left = cfpp(pre,post,prell,prelr,postll,postlr)
    node.right = cfpp(pre,post,prerl,prerr,postrl,postrr)
    return node

}