/**
 * @param {string} s
 * @param {string} t   双指针
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var i = j = 0
    var slen = s.length
    var tlen = t.length
    while (i < slen && j < tlen) {
        if (s[i] !== t[j]){
            j++
        } else {
            i++
            j++
        }
    }
    if (i >= slen) {
        return true
    }
    return false
};