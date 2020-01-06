/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    // 1.获取矩阵长和宽
    let x = A.length
    let y = A[0].length
    // 2.用于记录每一列0和1的数量
    let cnt0 = 0
    let cnt1 = 0
    // 3.把首列的0全部置为1
    for (let i = 0; i < x; i++) {
        if (A[i][0] === 0) {
            for (let j = 0; j < y; j++) {
                A[i][j] ^= 1
            }
        }
    }
    //4. 统计除首列外的每一列的0和1的数量 如果0多余1则翻转该列
    for (let i = 1; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (A[j][i] == 0) {
                cnt0++
            } else {
                cnt1++
            }
        }
        if (cnt0 > cnt1) {
            for (let j = 0; j < x; j++) {
                A[j][i] ^= 1;
            }
        }
        cnt0 = 0
        cnt1 = 0
    }
    // 5.计算整个矩阵的值
    let sum = 0
    let temp = 0
    for (let i = 0; i < x; i++) {
        temp = 0
        for (let j = y-1; j >= 0; j--) {
            temp += A[i][j]<<(y - j - 1)
        }
        sum += temp
    }
    return sum
};

let arr = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
console.log(matrixScore(arr))