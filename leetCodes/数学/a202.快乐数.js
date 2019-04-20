
/**
 * @param {number} n 超时了
 * @return {boolean}  4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4  不快乐
 */
var isHappy = function(n) {
    var hash = {}
    while( n !== 1 ) {
        if (hash[n] == undefined) {
            hash[n] = 1
        } else {
            return false
        }
        n = compute(n)
    }
    return true
};

function compute(n) {
    return n.toString().split("").reduce((total,num) => {
        return total + Math.pow(num, 2)
    })
}
//另一种求和方式
// function compute(n) {
//     var pro = 0
//     while(n!==0) {
//         pro += Math.pow(n%10, 2)
//         n = n / 10
//     }
// }