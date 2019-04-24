/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var hash = {}
    var ans = 0
    var start = 0
    for (var i = 0,len = s.length; i < len; i++) {
        var item = s[i]
        //1.没重复
        if (!hash[item]) {
            hash[item] = true
        } else {
            //2.重复了 就要找到重复值的位置 并把start设为重复值的位置 
            for(;;) {
                //1)找到了重复值的位置，跳出循环
                if (s[start] === item) {
                    start++
                    break
                }
                //2)没找到，把当前start位置的值剔除hash
                hash[s[start]] = false
                start++
            }
        }
        ans = Math.max(ans, i - start + 1)
    }        
    return ans
};