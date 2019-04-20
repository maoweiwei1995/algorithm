/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var pmax1 = pmax2 = pmax3 = -1000
    var nmax1 = nmax2 = 1000
    nums.forEach(item =>{         
        if (item > pmax1) {
            pmax3 = pmax2 
            pmax2 = pmax1
            pmax1 = item
        } else if (item > pmax2){
            pmax3 = pmax2 
            pmax2 = item
        } else if (item > pmax3) {
            pmax3 = item
        }
        // 负最小值
        if (item < nmax1){
            nmax2 = nmax1
            nmax1 = item
        } else if (item < nmax2) {
            nmax2 = item            
        } 
    }) 

    return Math.max(pmax1*pmax2*pmax3,nmax1*nmax2*pmax1)
};
/**
 * @param {number[]} nums   时间O(n) 空间O(1)
 * @return {number}
 */
var maximumProduct = function(nums) {
    var pmax1 = pmax2 = pmax3 = -1000
    var nmax1 = nmax2 = 1000
    var len = nums.length
    for (var i = 0; i < len; i++) {
        if (nums[i] > pmax1) {
            pmax3 = pmax2 
            pmax2 = pmax1
            pmax1 = nums[i]
        } else if (nums[i] > pmax2){
            pmax3 = pmax2 
            pmax2 = nums[i]
        } else if (nums[i] > pmax3) {
            pmax3 = nums[i]
        }
        // 负最小值
        if (nums[i] < nmax1){
            nmax2 = nmax1
            nmax1 = nums[i]
        } else if (nums[i] < nmax2) {
            nmax2 = nums[i]            
        }
    }
    return Math.max(pmax1*pmax2*pmax3,nmax1*nmax2*pmax1)
};

/**
 * @param {number[]} nums  排序后 三个最大整数 与 2负1正中大的那个
 * @return {number}      时间nlogn 
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=> {
        return a - b
    })
    var max1 = nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]
    var max2 = nums[0]*nums[1]*nums[nums.length-1]
    return Math.max(max1,max2)
};