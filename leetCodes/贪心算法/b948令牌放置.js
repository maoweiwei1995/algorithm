/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 * 双指针
 */
var bagOfTokensScore = function(tokens, P) {
    let score = 0
    let max = 0
    //1.从小到大排序tokens
    tokens.sort((a, b) => a - b)
    // 2.首尾指针初始化
    let i = 0, j = tokens.length-1

    while (i <= j) {
        // 3.如果P值小于首指针值同时score值为0 则返回结果
        if (P < tokens[i] && score === 0) {
            return max
        }
        // 4.如果P值大于数组头则反复从头部兑换分数，直到不能兑换，记录分数最大值，然后从数组尾兑换P值，重复该动作直到首尾指针重合
        while (P >= tokens[i]) {
            P -= tokens[i]
            score++
            max = Math.max(max, score)
            i++
        }
        P+= tokens[j]
        score--
        j--
    }
    return max
};

let tokens = [100,200,300,400], P = 200
console.log(bagOfTokensScore(tokens, P))