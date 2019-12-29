/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = []
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]]++
        } else {
            hash[s[i]] = 1
        }
    }
    let len = Object.keys(hash).length
    for (let j = 0; j < len; j++) {
        let max = ''
        for (let x in hash) {
            if (hash[x] > (hash[max] || -1)) {
                max = x
            }
        }
        for (let k = 0; k < hash[max]; k++) {
            res += max
        }
        hash[max] = -1
    }
    return  res
};
console.log(frequencySort('tree'))