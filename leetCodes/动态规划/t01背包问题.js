//https://www.cnblogs.com/Christal-R/p/Dynamic_programming.html
/**
 * 
 * @param {*} v 
 * @param {*} w 
 * @param {*} capacity 
 * j < w[i] V[i][j] = V[i-1][j]
 * j >= w[i] V[i][j] = Math.max(V[i-1][j], V[i][j-w[i]] + v[i])
 */
var findMax = function (v, w, capacity){
    let len = v.length
    let V = []
    //初始化
    for (let i = 0; i < len; i++) {
        V[i] = []
        for (let j = 0; j < capacity; j++) {
            if (i == 0 || j == 0){
                V[i][j] = 0
            }
        }
    }

    for (let i = 1; i < len; i++) {
        for (let j = 1; j < capacity; j++){
            if (j < w[i]){
                V[i][j] = V[i-1][j]
            } else {
                V[i][j] = Math.max(V[i-1][j], V[i-1][j-w[i]] + v[i])
            }
        }
    }
    return V[len-1][capacity-1]
}

let v = [6, 3, 5, 4, 6]
let w = [2, 2, 6, 5, 4]
console.log(findMax(v, w, 10))