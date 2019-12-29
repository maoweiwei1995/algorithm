/**
 * @param {character[][]} board
 * @return {boolean}
 * 定义横纵 以及3*3 三类 分别校验
 * 3*3需要四重循环
 */
var isValidSudoku = function(board) {
    // 横
    let hashH = []
    // 纵
    let hashZ = []
    // 3*3
    let hash3 = []
    
    // 横
    for (let i = 0; i < 9; i++) {
        hashH = []
        for (let j = 0; j < 9; j++) {
            if (!hashH[board[i][j]]) {
                hashH[board[i][j]] = 1
            } else {
                if (board[i][j] != '.') {
                    return false
                }
            }
        }
    }
    // 纵
    for (let i = 0; i < 9; i++) {
        hashZ = []
        for (let j = 0; j < 9; j++) {
            if (!hashZ[board[j][i]]) {
                hashZ[board[j][i]] = 1
            } else {
                if (board[j][i] != '.') {
                    return false
                }
            }
        }
    }
    // 3*3
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            hash3 = []
            for (let k = 3 * i; k < 3 * i + 3; k++) {
                for (let l = 3 * j; l < 3 * j + 3; l++) {
                    if (!hash3[board[k][l]]) {
                        hash3[board[k][l]] = 1
                    } else {
                        if (board[k][l] != '.') {
                            return false
                        }
                    }
                }
            }
        }
    }
    return true
};