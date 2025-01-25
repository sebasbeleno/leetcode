/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    for (let row = 0; row < n / 2; row++) {
        for (let col = row; col < n - row - 1; col++) {
            a// Swap the top-left and top-right cells in the current group
            [matrix[row][col], matrix[col][n - 1 - row]] = [matrix[col][n - 1 - row], matrix[row][col]];

            // Swap the top-left and bottom-right cells in the current group
            [matrix[row][col], matrix[n - 1 - row][n - 1 - col]] = [matrix[n - 1 - row][n - 1 - col], matrix[row][col]];

            // Swap the top-left and bottom-left cells in the current group
            [matrix[row][col], matrix[n - 1 - col][row]] = [matrix[n - 1 - col][row], matrix[row][col]];

        }
    }
    return matrix
};