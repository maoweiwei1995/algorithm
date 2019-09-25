/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2)
    while(n.length < 32){
        n = '0'+n
    }
    let ans = n.split('').reverse().join('')
    return parseInt(ans, 2)
};
let n = 7
console.log(reverseBits(n))