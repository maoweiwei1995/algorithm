/**
 * @param {number[]} heights
 * @return {number}
 * 本质是排序
 */
var heightChecker = function(heights) {
    let temp = [].concat(heights)
    temp.sort((a, b)=> a-b)
    let ans = 0
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== heights[i]){
            ans++
        }
    }
    return ans
};
let arr = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]
console.log(heightChecker(arr))