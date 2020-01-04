/**
 * @param {string} S
 * @return {number[]}
 * 
 */
var partitionLabels = function(S) {
    let hash = {}
    let arr = []
    let end = 0
    let start = 0
    //1.遍历字符 储存每个字符最后出现的位置
    for (let i = 0; i < S.length; i++) {
        hash[S[i]] = i
    }
    //2. 设定一个区间 start到end 遍历其中的字符，如果该区间内有字符最后出现的位置>end则更新end，
    //   直到区间内所有字符出现的位置都<=end 则start和end之间就是一个目标区间。
    for (let i = start; i < S.length; i++) {
        end = Math.max(end, hash[S[i]])
        if (i == end) {
            arr.push(end - start + 1)
            start = end + 1
        }
    }
    return arr
};
let S = "ababcbacadefegdehijhklij"
console.log(partitionLabels(S))