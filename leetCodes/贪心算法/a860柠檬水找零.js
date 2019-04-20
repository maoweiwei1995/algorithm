/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    coins = [5, 10, 20]
    myCoins = [0, 0, 0]
    for (var i = 0; i < bills.length; i++) {
        if (bills[i] == coins[0]) {
            myCoins[0]++
        } else if (bills[i] == coins[1]) {
            if (myCoins[0] <= 0) {
                return false
            } else {
                myCoins[0]--
                myCoins[1]++
            }
        } else {
            if (myCoins[0] >= 1 && myCoins[1] >= 1) {
                myCoins[0]--
                myCoins[1]--
                myCoins[2]++
            } else if (myCoins[0] >= 3){
                myCoins[0] -= 3
                myCoins[2]++
            } else {
                return false
            }
        }
    }
    return true
};