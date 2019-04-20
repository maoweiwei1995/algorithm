/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var i = 0, j = s.length-1
    var reg = /0-9a-zA-Z/
    while(i < j) {

        while(!reg.test(s[i])) {
                i++              
             }
        while(!reg.test(s[j])){
                j--             
             }
        if (i >= j) {
            return true
        }
        
        if(s[i++].toLowerCase() !== s[j--]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))