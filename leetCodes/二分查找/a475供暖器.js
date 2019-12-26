/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    // 1.获得每个房子与最近加热器的距离
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    let l = 0
    let r = heaters.length - 1
    let mid = 0
    let temp = 0
    let ans = 0
    for (let i = 0; i < houses.length; i++) {
        let house = houses[i]
        l = 0
        r = heaters.length-1
        while(l < r) {
            mid = l + Math.floor((r-l)/2)
            if (house >= heaters[mid]) {
                l = mid + 1
            } else{
                r = mid
            }
        }
        if (heaters[l] > house) {
            if (l == 0) {
                temp = heaters[l] - house
            } else {
                temp = Math.min(Math.abs(heaters[l] - house), Math.abs(heaters[l-1] - house))
            }
            ans = Math.max(temp, ans)
        } else {
            ans = Math.max(ans, house - heaters[l])
        }
    }
    return ans
};

let houses = [1,2,3,4], heaters = [1,4]
console.log(findRadius(houses, heaters))