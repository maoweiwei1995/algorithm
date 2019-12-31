/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 双指针滑动窗口法
 * 判断条件 窗口大小> 同一个字母数量最多值+k
 */
var characterReplacement = function(s, k) {
    let res = 0, max = 0, l = 0
    let hash = []
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if (hash[s[i].charCodeAt() - 'A'.charCodeAt()]) {
            hash[s[i].charCodeAt() - 'A'.charCodeAt()]++
        } else {
            hash[s[i].charCodeAt() - 'A'.charCodeAt()] = 1
        }
        max = Math.max(max, hash[s[i].charCodeAt() - 'A'.charCodeAt()])
        while (i - l + 1 - max > k) {
            hash[s[l].charCodeAt() - 'A'.charCodeAt()]--
            l++
        }
        res = Math.max(res, i - l + 1)
    }
    return res
};
console.log(characterReplacement('AABABBA', 1))