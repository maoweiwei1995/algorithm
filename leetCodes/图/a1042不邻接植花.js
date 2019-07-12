/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 * 
 * 执行结果：
通过
显示详情
执行用时 :
204 ms
, 在所有 JavaScript 提交中击败了
100.00%
的用户
内存消耗 :
50.6 MB
, 在所有 JavaScript 提交中击败了
100.00%
的用户
用Array.fill有风险 慎用

JS-Array.prototype 中的方法的坑
fill()
今天刷 HackerRank 的题遇到需要创建链表数组（一维数组的每一项是个链表）的题。

众所周知 JS 中的数组可以当链表用，我就用如下代码进行创建

let seqs = (new Array(5)).fill([])

运行时结果很是诡异，经调试发现这数组这五项指向的是同一个数组，看来 fill 方法并不是每次都创建新的数组。

然后我又尝试使用let seqs = (new Array(5)).map(() => [])得到的结果和new Array(5)一样是一个长度为 5 的一维空数组（因为 map 对每个数组元素调用提供的方法，现在数组里还没有元素）。

最后使用let seqs = (new Array(5)).fill(0).map(() => [])就 OK 了
 */
var gardenNoAdj = function(N, paths) {
    let result = []
    let count = 0
    // 1.创建图
    // 特殊写法
    let pathsMap = (new Array(N+1)).fill(0).map(()=>[])
    for (let value of paths) {
        pathsMap[value[0]].push(value[1])
        pathsMap[value[1]].push(value[0])
    }
    let set = new Set()
    // 2.遍历图
    for (let i = 1; i <= N; i++) {
        let temp = pathsMap[i]
        set.clear()
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] < i) {
                set.add(result[temp[j]])
            }
        } 
        for (let k = 1; k <= 4; k++) {
            if (!set.has(k)) {
                count = k
                break
            }
        }
        result[i] = count
    }
    result.shift()
    return result
};


console.log(gardenNoAdj(5, [[4,1],[4,2],[4,3],[2,5],[1,2],[1,5]]))

// let arr = (new Array(5)).fill(0).map(()=>[])
// arr[0].push(1)

// console.log(arr)