/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let len = points.length
    if (len <= 1) {
        return len
    } 
    // 1 先按区间末端 升序排列
    points.sort((a, b) => a[1] - b[1])
    let cnt = 1
    // 初始时end为第一个元素的区间末端
    let end = points[0][1]
    // 2.每当 后一个区间start <= 前一个区间end时 不需要增加箭 >时需要新的箭
    for (let i = 1; i < len; i++) {
        if (points[i][0] > end) {
            cnt++
            end = points[i][1]
        }
    }
    return cnt
};