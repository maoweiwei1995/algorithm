/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    n = n.toString(2)
    let i = 0
    while(i < n.length-1 && n[i] != n[i+1]) {
        i++
    }
    if (i == n.length-1) {
        return true
    }
    return false
};