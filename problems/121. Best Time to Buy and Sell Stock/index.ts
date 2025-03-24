function maxProfit(prices: number[]): number {
    let min = prices[0]
    let max = min
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= min) {
            max = min = prices[i]
        } else if (prices[i] > max) {
            max = prices[i]
        }

        maxProfit = Math.max(max - min, maxProfit)
    }

    return maxProfit
};