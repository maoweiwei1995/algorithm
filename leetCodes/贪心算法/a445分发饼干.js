/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var count = 0
    //先排序 再用双指针
    g.sort((a, b) => {
        return a - b
    })
    s.sort((a, b) => {
        return a - b
    })
    var i = 0, j = 0, leng = g.length, lens = s.length
    while (j < leng && i < lens) {
        if (g[j] <= s[i]) {
            count += 1
            i++
            j++
        } else {
            i++
        }
    }
    return count
};