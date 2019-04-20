/**
 * @param {character[]} letters   超时
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // 不在数组中
     if (target <= letters[0]){
         return letters[letters.length-1]
     }
     if (target >= letters[letters.length-1]){
         return letters[0]
     }
     
     var l = 0,r = letters.length-1
     while(l <= r) {
         m = (l+r)/2
         if(target == letters[m]){
             return letters[m+1]
         } else if (target > letters[m]) {
             l = m-1 
         } else {
             r = m+1 
         }
     }
     return -1
     
     
 };