/**
 * @param {string} S
 * @return {number}
 *  
        遍历一遍字符串，
        1.如果遇到 （ ， 将其入栈，如果此时遍历到最后一个字符，那么栈的大小，即为答案，也就是所缺的 ） 的数量
        2.如果遇到 ） ， 如果栈顶不为空， 则将栈顶出栈，若为空，那么表明此时缺少一个 （ 与其匹配。
    
   ）））（（（
 */
var minAddToMakeValid = function(S) {
    let s = []
    let res = 0
    for(let i in S){
        if(S[i] == '('){
            s.push('(')
        } else{
            if(s.length !== 0){
                s.pop()                
            }else{
                res++
            }
        }
    }
    return res+s.length
};