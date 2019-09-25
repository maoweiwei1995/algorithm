/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let lenn = name.length
  let lent = typed.length
  if (lenn > lent){
      return false
  }  
  let i = 0, j = 0
  while ( i < lenn && j < lent) {
      if (name[i] === typed[j]){
          i++
          j++
      } else if (j > 0 && typed[j-1] == typed[j]){
          j++
      } else {
          return false
      }
  }
  return i === lenn
};