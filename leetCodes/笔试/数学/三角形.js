// // 爱奇艺2018秋季校招前端12题 
// 牛牛手中有三根木棍,长度分别是a,b,c。牛牛可以把任一一根木棍长度削短,牛牛的目标是让这三根
木棍构成一个三角形,并且牛牛还希望这个三角形的周长越大越好。
var triangle = function (nums) {
    // 从小到大排序
    nums.sort((a, b) => {
        return a - b
    })
    return nums[0]+nums[1]>nums[2]? nums: [nums[0],nums[1],nums[0]+nums[1]-1]
}