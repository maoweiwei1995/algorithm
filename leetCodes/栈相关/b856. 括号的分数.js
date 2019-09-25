/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let len = S.length
    let stack = []
    let n = ''
    for (let i = 0; i < len; i++) {
        if (S[i] === '(') {
            stack.push(S[i])
        } else {
            let jsq = 0
            while (stack.length) {
                n = stack.pop()
                if (n !== '(') {
                    jsq += n
                } else {
                    break
                }
            }
            if (jsq === 0) {
                stack.push(1)
            } else {
                stack.push(2 * jsq)
            }
        }
    }
    return stack.reduce((a, b) => a + b)
};