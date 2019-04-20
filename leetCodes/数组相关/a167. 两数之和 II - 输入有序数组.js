/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //键值互换
    var hash = {}
    for(var i = 0; i < numbers.length; i++) {
        if (hash[target-numbers[i]] !== undefined){
            return [hash[target-numbers[i]]+1,i+1]
        }
        hash[numbers[i]] = i
    }
};