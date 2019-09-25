/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var hammingDistance = function(x, y) {
//     x = x.toString(2)
//     y = y.toString(2)
//     let lenx = x.length
//     let leny = y.length
//     if (lenx > leny) {
//         for (let i = 0; i < lenx-leny; i++){
//             y = '0' + y
//         }
//     } else if (lenx < leny) {
//         for (let i = 0; i < leny-lenx; i++){
//             x = '0' + x
//         }
//     }
//     console.log(x, y)
//     lenx = x.length
//     let ans = 0
//     for (let i = 0; i < lenx; i++){
//         if (x[i] != y[i]){
//             ans++
//         }
//     }
//     return ans
// };


// var hammingDistance = function(x, y) {
//     x = x.toString(2).split('')
//     y = y.toString(2).split('')
//     let sum = 0
//     while(x.length || y.length){
//         if (x.length == 0) x.push('0')
//         if (y.length == 0) y.push('0')
//         if (x.pop() != y.pop()){
//             sum++
//         }
//     }
//     return sum
// }

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x^y).toString(2).split('').filter(item => item == 1).length  
};

console.log(hammingDistance(3, 255))