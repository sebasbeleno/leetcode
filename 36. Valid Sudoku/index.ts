function isValidSudoku(board: string[][]): boolean {
    let cols = new Map()
    let rows = new Map()
    let blocks = new Map()

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let currentCel = board[row][col]

            if (currentCel === ".") {
                continue
            }

            // check if exists on col, row and
            if (rows.get(row)?.has(currentCel)
                || cols.get(col)?.has(currentCel)
                || blocks.get(
                Math.floor(row / 3) * 3 + Math.floor(col / 3)
                )?.has(currentCel)) {
                return false
            }

            cols.set(col, new Set(cols.get(col)).add(currentCel))
            rows.set(row, new Set(rows.get(row)).add(currentCel))

            blocks.set(
                Math.floor(row / 3) * 3 + Math.floor(col / 3),
                new Set(
                    blocks.get(Math.floor(row / 3) * 3 + Math.floor(col / 3)),
                ).add(currentCel)
            )
        }
    }

    return true
};