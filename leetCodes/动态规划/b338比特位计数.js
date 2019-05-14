/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if(num == 0){
        return [0]
    } else if(num == 1){
        return [0,1]
    }
    var dp = []
    dp[0] = 0
    dp[1] = 1
    var ans = []
    ans.push(dp[0],dp[1])
    for (var i = 2; i <= num; i++) {
        if(i % 2 == 1){
            dp[i] = dp[Math.floor(i/2)] + 1        
        } else {
            dp[i] = dp[i/2]
        }
        ans.push(dp[i])
    }
    return ans
};