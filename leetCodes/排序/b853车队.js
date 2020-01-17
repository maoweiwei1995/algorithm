/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let car = []
    let len = position.length
    if (len <= 0) {
        return 0
    }
    let cnt = 1
    let sign = 0
    for (let i = 0; i < len; i++) {
        let time = (target - position[i]) / speed[i]
        car.push({
            time: time,
            pos: target - position[i]
        })
    }
    car.sort((a, b) => {
        return a.pos - b.pos
    })
    sign = car[0].time
    for (let i = 1; i < len; i++) {
        if (car[i].time > sign) {
            cnt++
            sign = car[i].time
        }
    }
    return cnt
};
let target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
console.log(carFleet(target, position, speed))