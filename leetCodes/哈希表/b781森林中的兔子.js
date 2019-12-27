/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let min = 0
    let hash = []
    let len = answers.length
    for (let i = 0; i < len; i++) {
        if (!hash[answers[i]]) {
            hash[answers[i]] = 1
        } else {
            hash[answers[i]]++
        }
    }
    for ( let x in hash) {
        let p = hash[x]
        x = parseInt(x)
        if (p <= x + 1) {
            min += x + 1
        } else {
            while(p > 0) {
                p -= x + 1
                min += x+1
            }
        }
    }
    return min
};