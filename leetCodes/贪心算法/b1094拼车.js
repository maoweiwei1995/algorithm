/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 * 1.先统计每个点尽上车和下车的人数
 * 再遍历每个点， 如果capacity<0 则无法达成
 */
var carPooling = function(trips, capacity) {
    let len = trips.length
    let sta = []
    for (let i = 0; i < 1001; i++) {
        sta[i] = 0
    }
    for (let i = 0; i < len; i++) {
        sta[trips[i][1]] += trips[i][0]
        sta[trips[i][2]] -= trips[i][0]
    }
    for (let i = 0; i < 1001; i++) {
        capacity -= sta[i]
        if (capacity < 0) {
            return false
        }
    }
    return true
};