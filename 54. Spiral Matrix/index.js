/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let rows = matrix.length
    let cols = matrix[0].length

    let row = 0
    let col = -1

    let direction = 1

    const result = []

    while (rows > 0 && cols > 0) {

        // move horizonraly in one of two directions
        for (let i = 0; i < cols; i++) {
            col += direction;
            result.push(matrix[row][col])
        }
        rows--

        for (let i = 0; i < rows; i++) {
            row += direction;
            result.push(matrix[row][col])
        }
        cols--


        direction *= -1
    }


    return result
};