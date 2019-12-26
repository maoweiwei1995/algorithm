var permute = function(n) {
    if (n < 1){
        return []
    }
    let result = []
    let temp = []
    let len = nums.length
    backtrack(result, temp, nums, 0, n, {}, n)
    return result
};

function backtrack(result, temp, nums, start, end, hash, len) {
    if (temp.length === len) {
        result.push(temp.concat())
    } else {
        for (let i = start; i < len; i++){
            if (temp[i-2] == 0 && temp[i-1] == 0){
                temp.push(1)
                backtrack(result, temp, nums, start, end, hash, len)
                temp.pop()
            } else if (temp[i-2] == 1 && temp[i-1] == 1){
                temp.push(1)
            } else {
                temp.push()
            }
        }
    }
}