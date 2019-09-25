/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num == 0){
        return '0'
    }
    let ans = ''
    let hash = '0123456789abcdef'
    while(num && ans.length < 8) {
        ans = hash[num & 0xf] + ans
        num = num >> 4
    }
    return ans
};
let num = 26
console.log(toHex(num))