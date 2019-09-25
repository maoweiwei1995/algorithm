/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let len = asteroids.length
    let stack = []
    let tmp = 0
    for (let i = 0; i < len; i++) {
        if (stack.length === 0) {
            if (asteroids[i]){
                stack.push(asteroids[i++])
            } else {
                return stack
            }
        }

        while (stack.length && stack[stack.length-1] > 0 && asteroids[i] < 0){
            tmp  = stack[stack.length-1]
            if (Math.abs(tmp) > Math.abs(asteroids[i])) {
                break
            } else if(Math.abs(tmp) < Math.abs(asteroids[i])) {
                stack.pop()
            } else {
                stack.pop()
                i++
                break
            }   
        }
        if (stack.length === 0 || !(stack[stack.length-1] > 0 && asteroids[i] < 0)) {
            if (asteroids[i]){
                stack.push(asteroids[i])
            } else {
                break
            }
        }
    }
    return stack
};


console.log(asteroidCollision([8, -8]))