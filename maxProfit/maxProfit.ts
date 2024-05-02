export default function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let left = 0;
    let right = 1;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        } else {
            left = right;
        }
        right++;
    }

    return maxProfit;
}