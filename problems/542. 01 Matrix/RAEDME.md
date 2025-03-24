# [542. 01 Matrix](https://leetcode.com/problems/01-matrix/)

We will approach this problem by using dynamic programming. We will traverse all the matrix from top-left to bottom-right and fill the matrix with the minimum distance from the nearest 0 of the left and up cell. Then we will traverse the array from the bottom-right to top-left and fill the matrix with the minimum distance from the nearest 0 of the right and down cell AND the current value of the cell. This way we will get the minimum distance from the nearest 0 for each cell.

## Complexity Analysis
**Time Complexity:** `O(m*n)` where `m` is the number of rows and `n` is the number of columns in the matrix.
**Space Complexity:** `O(m*n)` where `m` is the number of rows and `n` is the number of columns in the matrix.