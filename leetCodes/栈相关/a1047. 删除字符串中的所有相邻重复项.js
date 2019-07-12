/**
 * @param {string} S
 * @return {string}
 */
    var removeDuplicates = function(S) {
    let sta = []
    let len = S.length
    let i = 0
    while (i < S.length){
        if (sta.length === 0) {
            sta.push(S[i])
            i++
        }
        if(sta[sta.length-1] === S[i]){
            sta.pop()
            i++
        } else {
            sta.push(S[i++])
        }
    }
    return sta.join('')
};