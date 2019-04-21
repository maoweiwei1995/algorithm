/**
 * @param {number[]} piles
 * @return {boolean} 
 * 从最简单的两堆石子的情况开始分析 先拿的永远有优势
 */
// var stoneGame = function(piles) {
//     return true
// };

/**
 * @param {number[]} piles
 * @return {boolean} 
 * 最终目的是求dp[0][piles.len - 1]的值
 * 
 */
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    var len = piles.length
    var dp = new Array(len)
    for (var i = 0; i < len; i++) {
        dp[i] = new Array(len)
        for (var j=0; j < len; j++) {
            dp[i][j] = 0
        }
    }
    for (var i = 0; i < len; i++) {
        dp[i][i] =  piles[i]
    }
    for (var i = 1; i < len; i++) {
        
        for (var j = 0; j < len - i; j++) {
            
            dp[j][i+j] = Math.max(piles[j]-dp[j+1][i+j],piles[i+j]-dp[j][j+i-1])
        }
    }

    return dp[0][len-1] > 0
};

console.log(stoneGame([6,3,5,3,6,8]))




