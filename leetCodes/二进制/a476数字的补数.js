/**
 * @param {number} num
 * @return {number}
 */
// var findComplement = function(num) {
//     num = num.toString(2)
//     // console.log(num)
//     num = num.replace(/1/g, '2')
//     // console.log(num)
//     num = num.replace(/0/g, '1')
//     // console.log(num)
//     num = num.replace(/2/g, '0')
//     // console.log(num)
//     return parseInt(num, 2)
// };


/**
 * @param {number} num
 * @return {number}
 */
// var findComplement = function(num) {
//     num = num.toString(2)
//     let ans = []
//     for (let i = 0; i < num.length; i++){
//         if (num[i] == 1) {
//             ans.push('0')
//         } else {
//             ans.push('1')
//         }
//     }
//     return parseInt(ans.join(''), 2)
// }

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let temp = num
    let c = 0
    while(temp > 0){
        temp >>= 1
        c = (c<<1) + 1
    }
    return num ^ c
};
console.log(findComplement(5))