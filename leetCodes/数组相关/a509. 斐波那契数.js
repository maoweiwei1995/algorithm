/**递归
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    //边界条件
    if (N == 0) {
        return 0
    }
    if (N==1 || N==2) {
        return 1
    }
    return fib(N-1)+fib(N-2)
};

/**非递归
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N == 0) {
        return 0
    }
    if (N==1) {
        return 1
    }
    var a = 0
    var b = 1
    var c = a + b
    for (var i = 2; i < N; i++) {
        a = b
        b = c
        c = a + b
    }
    return c
};

//数组
/**
 * @param {number} N    
 * @return {number}
 */
var fib = function(N) {
    var dp = [];
    dp.push(0); dp.push(1);
    for(var i = 2;i <= N;i++){
        dp.push(dp[i - 1] + dp[i - 2]);
    }
    return dp[N];
};

