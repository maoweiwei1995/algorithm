/**
 * @param {string} s
 * @return {string[]}
 * 用位比较快，把字母映射成2个位，每次只要去除前一个字母，
 */
var findRepeatedDnaSequences = function(s) {
    let len = s.length
    let hash = {}
    let mask = 0xfffff
    let tab = { 'A': 0, 'C': 1, 'G': 2, 'T':3}
    let val = tab[s[0]] 
    let arr = []
    
    for (let i = 1; i < 10; i++) {
        val = val<<2
        val = val | tab[s[i]]
    }
    hash[val] = 1
    for (let i = 1; i < len - 9; i++) {
        val = ((val<<2)&mask)|tab[s[i+9]]
        if (hash[val]){
            if (hash[val] == 1) {
                arr.push(s.slice(i, i+10))
                hash[val] = 2
            }
        } else {
            hash[val] = 1
        }
    }
    return arr
};


// /**
//  * @param {string} s
//  * @return {string[]}
//  * 哈希表统计
//  */
// var findRepeatedDnaSequences = function(s) {
//     let len = s.length
//     let hash = {}
//     let temp = ''
//     for (let i = 0; i < len - 9; i++) {
//         temp = s.slice(i, i+10)
//         hash[temp]? hash[temp]++ : hash[temp] = 1
//     }
//     let arr = []
//     for (let key in hash) {
//         if (hash[key] >= 2) {
//             arr.push(key)
//         }
//     }
//     return arr
// };
let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
console.log(findRepeatedDnaSequences(s))