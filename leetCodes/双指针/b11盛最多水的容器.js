/**
 * @param {number[]} height
 * @return {number}
 * 动态规划
 * 这里用到了动态规划，基本的表达式: area = min(height[i], height[j]) * (j - i) 使用两
 * 个指针，值小的指针向内移动，这样就减小了搜索空间 因为面积取决于指针的距离与值小的值乘积
 * ，如果值大的值向内移动，距离一定减小，而求面积的另外一个乘数一定小于等于值小的
 * 值，因此面积一定减小，而我们要求最大的面积，因此值大的指针不动，而值小的指针向内移动遍历
 */
var maxArea = function(height) {
    var max = 0
    var i = 0, j = height.length - 1
    var h = 0
    var temp = 0
    while (i<j) {
        h = Math.min(height[i], height[j])
        temp = Math.max(temp, h * (j - i))
        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }
    return temp
};

/**
 * @param {number[]} height
 * @return {number}  双循环 暴力解
 */
var maxArea = function(height) {
    var max = 0
    for (var i = 0,len = height.length; i < len; i++) {
        for (var j = 1; j < len; j++) {
            s = Math.min(height[i], height[j]) * (j - i)
            if (max < s) {
                max = s
            }
        }
    }
    return max
};