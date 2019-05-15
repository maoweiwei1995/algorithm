/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 * 关联丑数
 */
var nthSuperUglyNumber = function(n, primes) {
    let k = primes.length
    let index = []
    for (let i = 0; i < k; i++){
        index[i] = 1
    }
    let dp = []
    dp[1] = 1
    for (let i = 2; i <= n; i++){
        dp[i] = Number.MAX_VALUE
        for (let j = 0; j < k; j++){
            dp[i] = Math.min(dp[i],dp[index[j]]*primes[j])
        }
        for (let j = 0; j < k; j++){
            if (dp[i] == dp[index[j]]*primes[j]){
                index[j]++
            }
        }
    }
    return dp[n]
};