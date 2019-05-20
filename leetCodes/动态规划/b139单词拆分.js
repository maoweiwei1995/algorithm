/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 动态规划。dp[i]表示字符串s的前i个字符能否拆分成wordDict。
 dp[i] = dp[j] && wordDict.indexOf(s.slice(j, i))>=0
 */
var wordBreak = function(s, wordDict) {
    let len = s.length
    let dp = Array(len+1).fill(false)
    dp[0] = true
    for (let i = 1; i <= len ;i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.slice(j, i))>=0 ) {
                dp[i] = true
                break
            }
        }
    }
    return dp[len]
};