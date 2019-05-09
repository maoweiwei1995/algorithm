/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 * 找到第一个大于root.val的值序号 还是用while合适
 */
var bstFromPreorder = function(preorder) {
    if(!preorder){
        return null
    }
   return bfp(preorder,0,preorder.length-1)
};

function bfp(pre,l,r){
   if(l>r){
       return null
   }
   if(l==r){
       return new TreeNode(pre[l])
   }
   var root = new TreeNode(pre[l])
   var i = l+1
   while(i <= r && pre[i] <= pre[l]){
       i = i+1              
   }

   var ll = l+1
   var lr = i-1
   var rl = i
   var rr = r
   root.left = bfp(pre,ll,lr)
   root.right = bfp(pre,rl,rr)
   return root
}