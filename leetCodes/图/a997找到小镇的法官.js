/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 * 
 * 执行结果：
通过
显示详情
执行用时 :
140 ms
, 在所有 JavaScript 提交中击败了
93.06%
的用户
内存消耗 :
43.9 MB
, 在所有 JavaScript 提交中击败了
34.00%
的用户

思路：

分别用两个数组存储，一个用来存储入度数，也就是相信你的人的个数，数组下标就是代表该人，1到N
另外一个用来存储出度数，也就是你相信的人的个数
入度数等于N-1，出度数为0，则这个人就是法官，否则无法确定法官。
用时：128ms，内存消耗16MB
 */
var findJudge = function(N, trust) {
    let youTrust = new Array(N+1)  // 0
    youTrust.fill(0, 0, N+1)
    let trustYou = new Array(N+1)  // N-1
    trustYou.fill(0, 0, N+1)
    for (let i = 0, len = trust.length; i < len; i++) {
        youTrust[trust[i][0]]++
        trustYou[trust[i][1]]++
    }
    for (let i = 1; i <= N; i++) {
        if (youTrust[i] === 0 && trustYou[i] === N-1){
            return i
        }
    }
    return -1
};