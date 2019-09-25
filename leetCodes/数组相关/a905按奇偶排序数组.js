/**
 * @param {number[]} A
 * @return {number[]}
 */
// var sortArrayByParity = function(A) {
//   let i = 0
//   let len = A.length
//   let count = 0
//   while(i < len){
//       if (A[i] % 2 == 1){
//           A.push(A.splice(i,1))
//           count++
//           if (count > len){
//               return A
//           }
//       } else {
//           i++
//       }
//   }  
//   return A
// };


/**
 * @param {number[]} A
 * @return {number[]}
 * 速度快
 * 双指针
 */
var sortArrayByParity = function(A) {
    let i = 0
    let j = A.length-1
    while(i < j){
        while(A[i] % 2 != 1 && i < j){
            i++
        }
        while(A[j] % 2 == 1 && i < j){
            j--
        }
        [A[i], A[j]] = [A[j], A[i]]
    }
    return A
};