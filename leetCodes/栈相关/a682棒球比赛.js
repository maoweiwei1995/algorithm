// switch速度不是很快 时间击败15%
var calPoints = function(ops) {
    let len = ops.length
    let temp = []
    let sum = 0
    let i = 0
    let j = -1
    while (i < len) {
        switch(ops[i]){
            case '+':
                temp.push(temp[j-1]+temp[j])
                j++
                break;
            case 'C':
                temp.pop()
                j--
                break;
            case 'D':
                temp.push(2 * temp[j])
                j++
                break;
            default:
                temp.push(parseInt(ops[i]))
                j++
                break;
        }
        i++
    }
    sum = temp.reduce( (sum, cur)=>{
        return sum + parseInt(cur)
    })
    return sum
};

// console.log(calPoints(['5', '6','+']))

var calPoints = function(ops) {
    let sta = []
    for (let i = 0,len = ops.length; i < len; i++) {
        if (ops[i] === '+') {
            sta.push(sta.slice(-2)[0] +sta.slice(-2)[1])
        } else if( ops[i] === 'C') {
            sta.pop()
        } else if (ops[i] === 'D') {
            sta.push(sta.slice(-1)[0] * 2)
        } else {
            sta.push(+ops[i])
        }
    }
    return sta.reduce((a, b) => a + b)
}

console.log([1,2,3,4,5].slice(-1))
