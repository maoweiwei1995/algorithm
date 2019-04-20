/**
 * @param {character[]} tasks
 * @param {number} n    字母相减最好转成数字 .charCodeAt()
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    var hash = []
    var ans = 0
    var max = 0
    var maxCount = 0
    for (var i = 0; i < 26; i++) {
       hash[i] = 0
    }
    for (var i = 0; i < tasks.length; i++) {
       hash[tasks[i].charCodeAt() - 'A'.charCodeAt()]++
       if (hash[tasks[i].charCodeAt() - 'A'.charCodeAt()]>max){
           max = hash[tasks[i].charCodeAt() - 'A'.charCodeAt()]
       }
    }
    for (var i = 0; i < 26; i++) {
       if (hash[i] == max) {
            maxCount++
       }
    }
    ans = (max-1)*(n+1)+maxCount
    return Math.max(ans, tasks.length)
};