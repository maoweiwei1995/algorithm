/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num < 0) {
      return false
  }
  if (num == 1){
      return true
  }
  num = num.toString(2)
  let sum = 0
  let yi = 0
  let i = num.length

  for (let i = 0; i < num.length; i++) {
      if (num[i] == 1) {
        yi++
      }
  }
  if (yi > 1){
      return false
  }
  while(i-- > 0 && num[i] != 1){
    sum++
  }
  if (sum >= 2 && sum % 2 == 0){
      return true
  } else {
      return false
  }
};