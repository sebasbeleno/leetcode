# [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

The best pattern to this problem is sliding window. The window is the range of days that we are considering to buy and sell the stock. The window is defined by two pointers: `buy` and `sell`. The `buy` pointer is the leftmost pointer and the `sell` pointer is the rightmost pointer. The window is the range of days between `buy` and `sell`.

The window is moved to the right by moving the `sell` pointer to the right. The `buy` pointer is moved to the right only if the price of the stock at the `sell` pointer is less than the price of the stock at the `buy` pointer. The maximum profit is the maximum difference between the price of the stock at the `sell` pointer and the price of the stock at the `buy` pointer.

## Complexity Analysis
**Time Complexity:** `O(n)`
**Space Complexity:** `O(1)`
