"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            total += prices[i + 1] - prices[i];
        }
    }
    return total;
};
var prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
