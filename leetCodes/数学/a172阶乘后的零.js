/**
 * @param {number} n
 * @return {number}  找出每个数的2 5 因子的个数 取小值即可
 */
var trailingZeroes = function(n) {
    var n2 = 0
    var n5 = 0
    for (var i = 1; i < n+1; i++) {
        n2 += yinzi2(i)
        n5 += yinzi5(i)
    }
    return Math.min(n2,n5)
};

function yinzi2(num) {
    var n2 = 0
    while( num!==0 && num % 2 == 0){
        n2++
        num = num / 2
    }
    return n2
}

function yinzi5(num) {
    var n5 = 0
    while( num!==0 && num % 5 == 0){
        n5++
        num = num / 5
    }
    return n5
}