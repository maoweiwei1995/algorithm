/**
 * @param {string} asicii码表已经存在 不需要另外建表了
 * @return {number}
 */
var titleToNumber = function(s) {
    var arr = s.split("").reverse()
    var sum = 0
    for (var i = 0; i < arr.length ;i++) {
        sum += (arr[i].charCodeAt() - 64) * Math.pow(26,i)
    }
    return sum
};