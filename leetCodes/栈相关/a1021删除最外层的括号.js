// 执行用时 : 96 ms, 在Remove Outermost Parentheses的JavaScript提交中击败了100.00% 的用户
// 内存消耗 : 35.1 MB, 在Remove Outermost Parentheses的JavaScript提交中击败了100.00% 的用户

/**
 * @param {string} S
 * @return {string}
 * 计数方式
 */
var removeOuterParentheses = function(S) {
    let i = 0
    let j = 0
    let k = 0
    let ans = ''
    let len = S.length
    while(k < len){
        if (S[k] == '('){
            i++
        } else{
            j++
        }
        if(i == j){
            ans += S.slice(k-2*(i-1),k)
            j = 0
            i = 0
        }
        k += 1
    }
    return ans
};
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let i = 1
    let j = 0
    let ans = ''
    let len = S.length
    let stack = [S[0]]
    while(i < len){
        if (S[i] == '('){
            stack.push(S[i])
        } else{
            stack.pop()
            if(stack.length == 0){
                ans += S.slice(j+1,i)
                j = i + 1
            }
        }       
        i++
    }
    return ans
};