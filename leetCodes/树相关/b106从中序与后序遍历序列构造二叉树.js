/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder || !postorder){
        return null
    }
    return bt(inorder,postorder,0,inorder.length-1,0,inorder.length-1)
};

function bt(ino,po,il,ir,pl,pr){
    if(il>ir || pl > pr){
        return null
    }
    if(il == ir || pl == pr){
        return new TreeNode(po[pr])
    }
    var root = new TreeNode(po[pr])
    //找到中序里根节点的索引
    var index = ino.indexOf(po[pr])
    //根据索引把当前数组分为左右两半
    //inorder
    var ill = il
    var ilr = index -1
    var irl = index +1
    var irr = ir  
    //postorder
    var pll = pl
    var plr = index-1+(pl-il)//注意加上两个数组的相对位置关系
    var prl = index+(pl-il)
    var prr = pr-1
    root.left = bt(ino,po,ill,ilr,pll,plr)
    root.right = bt(ino,po,irl,irr,prl,prr)
    return root
}