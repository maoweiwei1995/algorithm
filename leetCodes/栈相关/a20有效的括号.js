/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var target = {
        ")" : "(" ,
        "]" : "[",
        "}" : "{"
    }
    var sta = []
    for (var i = 0 ; i < s.length; i++){
        if ( target[s[i]] === sta[sta.length-1]){
            sta.pop()
            if(sta.length === 0){
              sta.push(s[i+1])
                i++
            }
        } else {
            sta.push(s[i])
        }
    }
    return !sta.length
};