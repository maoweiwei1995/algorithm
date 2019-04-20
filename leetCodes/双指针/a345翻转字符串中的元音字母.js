/**
 * @param {string} s  超时。。。
 * @return {string}
 */
var reverseVowels = function(s) {
    var i = 0,j = s.length-1
    var temp = ''
    var hash = []
    hash['a'] = 1
    hash['e'] = 1
    hash['i'] = 1
    hash['o'] = 1
    hash['u'] = 1   
    hash['A'] = 1
    hash['E'] = 1
    hash['I'] = 1
    hash['O'] = 1
    hash['U'] = 1  
    while(i < j) {
        while(hash[s[i]]==undefined){
            i++
        }
        while(hash[s[j]]==undefined){
            j--
        }
      temp = s[i]
      s[i] = s[j]
      s[j] = temp
    }
   return s
};