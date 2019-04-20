/**
 * @param {number[]} ratings
 * @return {number}    
 */
var candy = function(ratings) {
    var ans = [] 
    var len = ratings.length
    for (var i = 0; i < len ; i++) {
       ans[i] = 1
    }

    for (var i = 0; i < len - 1; i++) {
        if (ratings[i] < ratings[i+1]) {
            ans[i+1] = ans[i] + 1
        }
    }
    for (var i = len-1; i >= 1; i--) {
        if (ratings[i-1] > ratings[i]) {
                ans[i-1] = Math.max(ans[i]+1, ans[i-1])

        }
    }
    return ans.reduce((total, cur) => {
        return total + cur
    }, 0)
};