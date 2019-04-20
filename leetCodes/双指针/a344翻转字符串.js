/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse().toString()
};


/**
 * @param {character[]} 双指针
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var i = 0, j = s.length-1
    var temp = ""
    while(i < j) {
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
    return s
};