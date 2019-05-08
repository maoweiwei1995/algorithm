/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder || !inorder){
        return null
    }
    return bt(preorder,inorder,0,preorder.length-1,0,inorder.length-1)
};

function bt(pre,ino,il,ir,pl,pr){
    if(il>ir || pl>pr){
        return null
    }
    if(il == ir || pl == pr){
        return new TreeNode(pre[pl])
    }
    var node = new TreeNode(pre[pl])
    
    var index = ino.indexOf(pre[pl])
    
    // inorder
    var ill = il
    var ilr = index-1
    var irl = index+1
    var irr = ir
    // preorder
    var pll = pl+1
    var plr = index+(pl-il)
    var prl = index+1+(pl-il)  //这里得从后面开始计算
    var prr = pr
    node.left = bt(pre,ino,ill,ilr,pll,plr)
    node.right = bt(pre,ino,irl,irr,prl,prr)
    return node
}