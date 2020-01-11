/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let min = Math.min(A, B)
    let arr = []
    if (A > B) {
        str1 = 'a'
        str2 = 'b'
    } else {
        str1 = 'b'
        str2 = 'a'
    }
    // 1.先按照ababab排 直到一个元素被用光
    for (let i = 0; i < 2 * min; i++) {
        if (i % 2 == 0) {
            arr[i] = str1
        } else {
            arr[i] = str2
        }
    }
    // 2.把剩余的另一个元素按位置插入到数组中即可
    for (let i = 0; i < A + B - 2 * min; i++) {
        arr.splice(3 * i, 0, str1)
    }
    return arr.join('')
};
let A = 6, B = 2
console.log(strWithout3a3b(A, B))