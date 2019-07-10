// 爱奇艺2018秋季校招前端11题
// 牛牛有一些排成一行的正方形。每个正方形已经被染成红色或者绿色。牛牛现在可以选择任意一个正方形然后用这两种颜色的任意一种进行染色,这个正方形的颜色将会被覆盖。牛牛的目标是在完成染色之后,每个红色R都比每个绿色G距离最左侧近。牛牛想知道他最少需要涂染几个正方形。
// 如样例所示: s = RGRGR
// 我们涂染之后变成RRRGG满足要求了,涂染的个数为2,没有比这个更好的涂染方案。

// 在当前位置为R时有可能两种情况,一种是吧这个位置编程G,另一种是吧前面的G全部变成R.
 
// 时间复杂度O(n),空间复杂度O(1)
var sss = function (nums) {
    let len = nums.length
    if (len === 0) {
        return 0
    }
    let dp = Array(len).fill(0)
    let gcount = nums[0] == 'G'? 1:0

    for (let i = 1; i < len; i++) {
        if (nums[i] == 'R') {
            dp[i] = Math.min(dp[i-1],gcount)
        } else {
            gcount++
        }
    }
    return dp[len - 1]
}
