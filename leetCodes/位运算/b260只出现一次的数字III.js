/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let xor = 0
  let num1 = 0
  let num2 = 0
  // 1.对整个数组所有的数字合起来做一次异或操作
  // 由于数值相同的值异或就是0,那么结果就是只出
  // 现一次的两个数a,b的异或结果，结果里至少有一个位的值为1，意味着这个位上，要么a是1，b是0，要么b是1，a是0
  for (let num of nums) {
      xor ^= num
  }
  let i = 1
  // 2.找到这个1的位置
  while ((xor & 1) === 0) {
      xor = xor >> 1
      i = i << 1
  }
  //3.根据所有的数的二进制值，在这个1对应的位置是否为1，可将数组一分为二，为1的做一次异或运算，为0的做一次异或运算，即可求出两数。
  for (let j = 0; j < nums.length; j++) {
      if ((nums[j] & i) == 0) {
          num1 ^= nums[j]
        } else {
          num2 ^= nums[j]
      }
  }
  return [num1, num2]
};

let arr = [1,2,1,3,2,5]
console.log(singleNumber(arr))