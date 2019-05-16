/**
 * @param {number} n
 * @return {number}
 * 击败100%
 * 如果这个数是质数 则这个数只能一个一个的复制得到 操作步数就是这个数
 * 本身 如果不是质数 则可以由复制得到 例如20可以由10复制得到 10
 * 可以由5复制得到 而5是质数 只能一个一个复制 所以minStep （20） = 9
 */
var minSteps = function(n) {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        while (n % i == 0) {
            res += i;
            n /= i;
        }
    }
    return res;
};
/**
 * @param {number} n
 * @return {number}
 dp[1] = 0
 dp[2] = 2
 dp[3] = 3
 先求出每个数的因子
 再根据
 dp[i] = Math.min(dp[i], dp[temp]+1+(i-temp)/temp) 最小值是以所有因子为基进行复制
 */
/**
 * @param {number} n
 * @return {number}
 dp[1] = 0
 dp[2] = 2
 dp[3] = 3
 dp[4] = Math.min(dp[2]+2,dp[1]+1 +1 + 1+1)
 
 dp[5] = dp[4] + 1
 dp[6] = Math.min(dp[3] + 1 + (6-3)/3, dp[2]+1 + (6-2)/2, 6)
 */
var minSteps = function(n) {
    let dp = []
    dp[1] = 0
    for (let i = 2;i <= n; i++){
        let fac = factor(i)
        let len  = fac.length
        dp[i] = i
        if (len == 0){
            continue
        }
        for (let j = 0; j < len;j++){
            let temp = fac[j]
            dp[i] = Math.min(dp[i], dp[temp]+1+(i-temp)/temp)
        }
    }
    return dp[n]

};
function factor(num){
    let ans = []
    for (let i = 2; i <= num/2; i++) {
        if (num % i == 0){
            ans.push(i)
        }
    }
    return ans
}