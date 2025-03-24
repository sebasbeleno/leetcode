# [322. Coin Change](https://leetcode.com/problems/coin-change/)

To solve this problem, we can use dynamic programming. We will create an array `dp` of size `amount`. We will initialize the array with `Number.MAX_VALUE` wich means that we can't make the amount with the given coins. We will set `dp[0]` to 0 because we can make 0 amount with 0 coins. We will iterate over the coins and for each coin, we will iterate over the `dp` array and update the value of `dp[i]` if `dp[i - coin] + 1` is less than `dp[i]`. Finally, we will return `dp[amount]` if it is less than `Number.MAX_VALUE` otherwise we will return -1.

## commplexity analysis
**Time complexity:** O(n * m) where `n` is the amount and `m` is the number of coins.
**Space complexity:** O(n) where `n` is the amount.
