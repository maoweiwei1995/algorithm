var findPeakElement = function(nums) {
    let l = 0
    let r = nums.length-1
    let mid = 0
    if (r == 0){
        return 0
    }
    while(l < r) {
        mid = l + Math.floor((r-l)/2)
        if (nums[mid] < nums[mid+1]){
            l = mid + 1
        } else {
            r = mid 
        }
    }
    return l
};