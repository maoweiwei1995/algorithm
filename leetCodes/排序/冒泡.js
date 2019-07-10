let bubble = function (arr) {
    if (arr.length === 0) {
        return []
    }
    let len = arr.length
    let temp = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            if (arr[j] < arr[j+1]) {
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubble([3,2,4,5,6,2,3,5,6,10]))