//否是是对称树 leetcode执行存疑 a101
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//     //传入的是根节点
//     switch(arguments.length){
//         case 1:
//             if(root.left==null||root.right==null){
//                 return root.left == roo.right
//             }
//            return isSymmetric(root.left, root.right) 
//            break
//         case 2:
//             if(arguments[0]==null||arguments[1]==null){
//                 return arguments[0]==arguments[1]
//             }
//             if(arguments[0].val!=arguments[1].val){
//                 return false
//             }
//            return   (isSymmetric(arguments[0].left,arguments[1].right))&& (isSymmetric(arguments[0].right,arguments[1].left)) 
//             break
//         default:
//             break
//     }    
// };

// var rootNode = new TreeNode(1)
// var leftNode = new TreeNode(2)
// var rightNode = new TreeNode(2)
// rootNode.left = leftNode
// rootNode.right = rightNode
// console.log(isSymmetric(rootNode))
