/**
 * @param {number[]} nums    这个会超时  得多提交几次  执行用时 : 164 ms, 在Range Sum Query - Immutable的JavaScript提交中击败了77.05% 的用户
 * 
 * 这道题很简单，但是也有需要注意的地方； 说明中提到“会多次调用 sumRange 方法”， 所以每次都逐个相加计算子区间的和不是理想的做法， 可以使用sum[i]存储nums前i个元素的和。则可得到i-j 子区间的和为sum[j]-sum[i-1]。 我试了使用一个二维数组存储每个i-j子段落的和，但是内存超了~
 */  
var NumArray = function(nums) {
    this.nums = nums
    this.sum = []    
    this.sum[0] = nums[0]
    var len = nums.length
    for (var i = 1; i < len; i++) {
        this.sum[i] = this.nums[i] + this.sum[i-1]
        }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i == 0) {
        return this.sum[j]
    } else {
        return this.sum[j] - this.sum[i-1]
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */