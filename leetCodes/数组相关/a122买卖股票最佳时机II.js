/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    var i = 0;
    var valley = 0;
    var peak = 0;
    while(i < prices.length - 1) {
        //先找最低点
        while(i<prices.length-1 && prices[i]>=prices[i+1]){
            i++
        }
        valley = prices[i]
        //再找最低点
        while(i<prices.length-1 && prices[i]<=prices[i+1]){
            i++
        }
        peak = prices[i]
        maxProfit += peak - valley
    }
    return maxProfit
};

/**
 * 
 * @param {number[]} prices
 * @return {number}
 
var maxProfit = function(prices) {
    var maxProfit = 0;
    for( var i = 0 ; i < prices.length-1 ; i++){
         if( prices[i]<prices[i+1]){
            maxProfit += prices[i+1] - prices[i]
        }
    }
    return maxProfit
};
 */