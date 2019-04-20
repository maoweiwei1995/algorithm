/**
 *  优先选用大面值的
 * 
 *  */
var coins = [1,2,5,10]
function changeCoins(num) {
      var ans = [0,0,0,0]
      for (var i = coins.length-1; i>=0; i--) {
          while (num >= coins[i]) {
              num -= coins[i]
              ans[i]++
          }
      }
      return ans.reduce((total, cur) => {
          return total + cur
      }, 0)
}
console.log(changeCoins(56))