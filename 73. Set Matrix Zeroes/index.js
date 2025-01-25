/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (mat) {
    /**
    * first, check if the first row and col have 0, if so
    * At the end of the algo we need to set those rows or col to 0
    *
    * Then, analyze all the matrix exept the first col or columns and if we found some 0, 
    * set the first element of that row/col to 0
    *
    * Then, iterate the first row and if found 0, set the rest of the elements of that row to 0
    * Same with cols
    *
    * then if in  the 1. found some 0's, fill that row/col
    */

    let rows = mat.length;
    let cols = mat[0].length
    let frow = false
    let fcol = false

    for (let i = 0; i < rows; i++) {
        if (mat[i][0] === 0) {
            fcol = true
            break;
        }
    }

    for (let i = 0; i < cols; i++) {
        if (mat[0][i] === 0) {
            frow = true
            break;
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (mat[i][j] === 0) {
                mat[0][j] = mat[i][0] = 0
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        if (mat[i][0] === 0) {
            mat[i].fill(0)
        }
    }

    for (let j = 1; j < cols; j++) {
        if (mat[0][j] === 0) {
            for (let i = 1; i < rows; i++) {
                mat[i][j] = 0;
            }
        }
    }


    if (fcol) {
        for (let i = 0; i < rows; i++) {
            mat[i][0] = 0;
        }
    }

    // If frow is true, set the first row to zero.
    if (frow) {
        mat[0].fill(0);
    }

};