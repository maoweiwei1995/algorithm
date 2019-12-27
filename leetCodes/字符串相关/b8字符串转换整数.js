/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let reg = /-?\d+/
    let res = str.match(reg)
    return res
};
console.log(myAtoi('asdfsad -1 11'))