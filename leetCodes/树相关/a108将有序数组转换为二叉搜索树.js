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
var sortedArrayToBST = function(nums) {
    return satb(nums,0,nums.length-1)
};

function satb(nums,l,r) {
    if (r < l) {
        return null
    }
    var mid = l + (r-l)/2
    var newNode = new TreeNode(nums[mid])
    newNode.left = satb(nums, l, mid-1)
    newNode.right = satb(nums, mid+1, r) 
    return newNode
}