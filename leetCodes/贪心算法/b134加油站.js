/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 一次遍历， 累计两个数组的前n个元素差值， 取差值最小的车站为出发车站。 确定能否开完一圈： 比较数组元素之和，gas>cost就可以开完。

思路： 相当于坐标轴向下平移，最小移多少可以使得所有元素均在横轴上方。 所以选最低位置的点
 */
var canCompleteCircuit = function(gas, cost) {
    var temp = 0
    var count = 0
    var min = Number.MAX_VALUE
    for ( var i = 0, len = gas.length; i < len; i++) {
        temp += gas[i] - cost[i]
        if (temp < min ) {
            min = temp 
            count = i
        }
    }
    if (temp >= 0) {
        return count + 1 >= len ? 0 : count + 1
    } else {
        return -1
    }

};