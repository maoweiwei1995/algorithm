/**
 * @param {number[][]} intervals
 * @return {number}
 * 
 * 贪心策略，先计算最多能组成的不重叠区间个数，然后用区间总个数减去不重叠区间的个数。

在每次选择中，选择的区间结尾越小，留给后面的区间的空间越大，那么后面能够选择的区间个数也就越大。

按区间的结尾进行升序排序，每次选择结尾最小，并且和前一个区间不重叠的区间。

在对数组进行排序的时候也可以使用 lambda 表示式来创建 Comparator ，不过算法运行时间会比较长点。
 */
var eraseOverlapIntervals = function(intervals) {
    let len = intervals.length
    if (len <= 1) {
        return 0
    }
    let cnt = 1
    intervals.sort((a, b) => {
        return a[1] - b[1]
    })
    let end = intervals[0][1]
    for (let i = 1; i < len; i++) {
        if (intervals[i][0] >= end) {
            cnt++
            end = intervals[i][1]
        }
    }
    return len - cnt
};