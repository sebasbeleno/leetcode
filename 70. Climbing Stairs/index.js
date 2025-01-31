/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 3) return n

    const dp = Array(n).fill(0)

    dp[0] = 1
    dp[1] = 2

    for (let i = 2; i < n; i++) {
        for (let j = 1; j <= 2; j++) {
            dp[i] += dp[i - j]
        }
    }

    return dp[dp.length - 1]
};