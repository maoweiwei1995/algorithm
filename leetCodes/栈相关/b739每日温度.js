/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let len = T.length
    let s = []
    let hash = []
    for(let i = 0; i < len; i++){
        while(s.length !== 0 && T[s[s.length-1]] < T[i]){
            let temp = s.pop()
            hash[temp] = i - temp
        }
        s.push(i)
    }
    
    // while(s.length !== 0){
    //     hash[s.pop()] = 0
    // }
    for(var j in s){
        hash[s[j]] = 0
    }
    return hash
};