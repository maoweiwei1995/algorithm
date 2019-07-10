let select = function (arr) {
    if (arr.length === 0) {
        return []
    }
    let len = arr.length
    let pos = 0
    let temp = 0
    for (let i = 0; i < len; i++) {
        pos = i
        for (let j = i+1; j < len; j++) {
            if (arr[j] < arr[pos]) {
                pos = j
            }
        }
        if (pos !== i){
            temp = arr[i]
            arr[i] = arr[pos]
            arr[pos] = temp
        }
    }
    return arr
}