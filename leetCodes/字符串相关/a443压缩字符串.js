/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let num = 0
  let i = 0
  while(i < chars.length-1){
      num = 1
    while(i < chars.length-1 && chars[i] == chars[i+1]) {
        num++
        chars.splice(i, 1)
    }
    chars.splice(i+1, 0, num.toString())
    i+=2
  }
  return chars.length
};
let arr = ["a","a","b","b","c","c","c"]
console.log(compress(arr))