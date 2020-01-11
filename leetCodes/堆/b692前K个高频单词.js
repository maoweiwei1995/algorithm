/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let len = words.length
    let hash = []
    for (let i = 0; i < len; i++) {
        if (hash[words[i]]) {
            hash[words[i]].cnt++
        } else {
            hash.push({
                name: words[i],
                cnt: 1
            })
        }
    }
    hash.sort(compare)
    return hash
};
let arr = ["i", 'ha', "love", "leetcode", "i", "love", "coding"]
let k = 2
console.log(topKFrequent(arr, k))




function compare(a, b) {
    let len1 = a.length
    let len2 = b.length
    let len = Math.min(len1, len2)
    if (b.cnt - a.cnt > 0) {
        return true
    } else if (b.cnt - a.cnt < 0){
        return false
    } else {
        for (let i = 0; i < len; i++) {
            if (a.charCodeAt(i) < b.charCodeAt(i)) {
                return true
            } else if (a.charCodeAt(i) == b.charCodeAt(i)) {
                continue
            } else {
                return false
            }
        }
    }
}