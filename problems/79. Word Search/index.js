/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function depthFirstSearch(row, col, word, index, grid) {
    // word - 1
    if (word.length == index) return true;

    if (
        row < 0 ||
        row >= grid.length ||
        col < 0 ||
        col >= grid[0].length ||
        grid[row][col] != word[index]
    ) {
        return false
    }

    let result = false
    let temp = grid[row][col]
    grid[row][col] = "*"

    let offsets = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    for (let offset of offsets) {
        let rowOffset = offset[0],
            colOffset = offset[1];
        result = depthFirstSearch(
            row + rowOffset,
            col + colOffset,
            word,
            index + 1,
            grid
        );
        if (result) break;
    }

    grid[row][col] = temp;
    return result;
}

var exist = function (grid, word) {
    let n = grid.length;
    let m = grid[0].length

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (depthFirstSearch(row, col, word, 0, grid)) return true;
        }
    }
    return false;
};