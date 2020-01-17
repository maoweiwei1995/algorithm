var largestNumber = function(nums) {
    if (Math.max(...nums) === 0) {
        return '0'
    }
    nums.sort((a, b) => (b + '' + a) - (a + '' + b))
    return nums.join('')
};