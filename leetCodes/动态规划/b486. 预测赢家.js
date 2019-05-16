/**
 * @param {number[]} nums
 * @return {boolean}
 *    *******
 *     ******
 *      *****
 *       ****
 *        ***
 *         **
 *          *
 * 题目分析，顺便学习一下动态规划。 按照动态规划的思想，a,b,...,c,d。A先取数，假设我们们知
 * 道这些数如何分成两组，让一组大于另外一组，差值定义为d[i]j，当A取数的时候，只能取头和尾部
 * 的数，剩余的数由B取最
 * 大，则d[i][j]=max(num[i]-d[i+1][j],num[j]-d[i][j-1])，这里为什么要减，因为A取完后，
 * B一定按照最大取数，则d[i+1][j]是B先取剩余数字时的差值。根据这个公式，按照循环的思想，如果想
 * 知道d[i][j]，必须要知道d[i+1][j]和d[i][j-1]。如果i=j，则d[i][j]=num[i]。将d[i][j]写成矩阵
 * ，如果要知道某个值，必须要知道它下面和左边的值，所以从矩阵右下方到左上方不断求值。 
 * public boolean PredictTheWinner(int[] nums) { int n = nums.length; int[][] temp = new int[n][n];
 */
var PredictTheWinner = function(nums) {
    let len = nums.length
  
    let dp = []
    for (let i = 0; i < len; i++) {
      dp[i] = []
    }
  
    for (let i = len - 1; i >= 0; i--){
      for (let j = i; j < len; j++) {
        if (i == j){
          dp[i][j] = nums[i]
          continue
        }
        dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
      }
    }
    return dp[0][len-1] >= 0
  };