/**
 * @param {number[]} A
 * @return {number[]}
 */
var prevPermOpt1 = function(A) {
    let len = A.length
    let i = len - 2
    let max = 0
    while (i >= 0) {
        // 1.从数组末尾开始找一个下降沿 从末尾找是因为越末尾的两数交换对整个数组数值影响越小，交换后数组的值越大。
        if (A[i] > A[i+1]) {
            // 2.找到后，从该下降沿向右遍历，找到比A[i]小的最大值，交换该最大值和A[i]即可
            max = i+1
            for (let j = i+2; j < len; j++) {
                if (A[j] < A[i] && A[j] > A[max]) {
                    max = j
                }
            }
            let temp = 0
            temp = A[i]
            A[i] = A[max]
            A[max] = temp
            return A
        }
        i--
    }
    return A
};
let arr = [1,9,4,6,7]
console.log(prevPermOpt1(arr))