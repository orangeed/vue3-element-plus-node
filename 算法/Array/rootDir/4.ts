/**
 * 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 示例：
 * 输入: prices = [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 */

const maxProfit = function (prices: number[]): number {
    // 如果长度是0的话，返回0，如果不是的话，继续执行后面的操作
    if (prices.length === 0) {
        return 0
    }
    // 定义一个利润总数的变量
    let total: number = 0
    // 循环
    for (let i = 0; i < prices.length; i++) {
        // 当后一天的数据大于前一天的时候，后一天减去前一天就是利润，将利润加起来
        if (prices[i] < prices[i + 1]) {
            total += prices[i + 1] - prices[i]
        }
    }
    return total
};

const prices: number[] = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));
export { }