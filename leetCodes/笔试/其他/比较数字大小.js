/**
 * 爱奇艺2018前端13
 * 对于任意两个正整数x和k,我们定义repeat(x, k)为将x重复写k次形成的数,例如repeat(1234, 3) = 123412341234,repeat(20,2) = 2020.
牛牛现在给出4个整数x1, k1, x2, k2, 其中v1 = (x1, k1), v2 = (x2, k2),请你来比较v1和v2的大小。
 * 
 */
var compare = function(x1, k1, x2, k2) {
    //分解x1
    let v1 = []
    let v2 = []
    let t1 = x1.toString().split("")
    let t2 = x1.toString().split("")
    //求总位数
    let totalBit1 = t1.length * k1
    let totalBit2 = t2.length * k2
    if (tatalBit1 > totalBit2) {
        return v1
    } else if (tatalBit1 < totalBit2){
        return v2
    }
    for (let i = 0; i < k1; i++) {
        v1.push(...t1)
    }
    for (let i = 0; i < k2; i++) {
        v2.push(...t2)
    }

    for (let i = 0; i < tatalBit1; i++) {
        if (v1[i] > v2[i]) {
            return v1
        } else if (v1[i] < v2[i]) {
            return v2
        }
    }

}