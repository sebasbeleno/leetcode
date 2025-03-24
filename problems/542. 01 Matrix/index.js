/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] > 0) {
                const up = (i > 0) ? mat[i - 1][j] : Infinity
                const left = (j > 0) ? mat[i][j - 1] : Infinity;

                mat[i][j] = Math.min(up, left) + 1
            }
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const down = (i < m - 1) ? mat[i + 1][j] : Infinity;
            const right = (j < n - 1) ? mat[i][j + 1] : Infinity;

            const minDistance = Math.min(down, right) + 1

            mat[i][j] = Math.min(mat[i][j], minDistance)
        }
    }


    // Replace this placeholder return statement with your code
    return mat;
};