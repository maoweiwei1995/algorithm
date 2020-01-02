/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 * 哈希表的运用
 */
var groupThePeople = function(groupSizes) {
    let len = groupSizes.length
    let res = []
    let hash = []
    for (let i = 0; i < len; i++) {
        if (!hash[groupSizes[i]]) {
            hash[groupSizes[i]] = []
        }
        hash[groupSizes[i]].push(i)
        if (hash[groupSizes[i]].length >= groupSizes[i]){
            res.push(hash[groupSizes[i]])
            hash[groupSizes[i]] = []
        }
    }
    return res
};

let arr = [3,3,3,3,3,1,3]
console.log(groupThePeople(arr))