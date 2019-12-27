/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const sta = []
    const tokens = path.split('/').filter(Boolean)
    for (let x of tokens) {
        if (x == '..'){
            if (sta.length > 0) {
                sta.pop()
            }
        } else if (x == '.'){

        } else {
            sta.push(x)
        }
    }
    return '/' + sta.join('/')
};