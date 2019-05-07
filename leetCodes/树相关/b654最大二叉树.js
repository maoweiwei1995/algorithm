/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return cmbt(nums,0,nums.length-1)
};
function cmbt(nums,l,r){
    if(l>r){
        return null
    }
    if(l==r){
        return new TreeNode(nums[l])
    }
    //找到最大值
    var max = Number.MIN_VALUE 
    var count = -1
    for(var i = l; i <= r; i ++){
        if(max < nums[i]){
            max = nums[i]
            count = i
        }
    }
    //把数组分割成左右两个
    var node = new TreeNode(max)
    node.left = cmbt(nums,l,count-1)
    node.right = cmbt(nums,count+1,r)
    return node
}