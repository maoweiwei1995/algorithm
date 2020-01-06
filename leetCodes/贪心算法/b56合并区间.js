/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 1.按区间左端起点排序
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let start = 0
    let end = 0
    let res = []
    let len = intervals.length
    // 2.遍历区间
    for (let i = 0; i < len; i++) {
        start = intervals[i][0]
        end = intervals[i][1]
        // 如果前一个区间末端 > 后一个区间起点 则把区间末端更新为后一个区间末端和前一个区间末端的较大值，
        // 直到不能合并为止
        while (i < len-1 && end >= intervals[i+1][0]) {
            if (end < intervals[i+1][1]) {
                end = intervals[i+1][1]
            }
            i++
        }
        res.push([start, end])
    }
    return res
};
let intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals))