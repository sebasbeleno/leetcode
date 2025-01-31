/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (rows, cols) {
    const dp = [...new Array(rows)].map(_ => new Array(cols).fill(0))

    dp[0].fill(1)

    for (let i = 0; i < rows; i++) {
        dp[i][0] = 1
    }

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            dp[row][col] += dp[row - 1][col] + dp[row][col - 1]
        }
    }

    return dp[rows - 1][cols - 1]
};