# [62. Unique Paths](https://leetcode.com/problems/unique-paths/)

We will use dynamic programming to solve this problem. We will create a 2D array of size m x n and initialize all the cells with 1. We will then iterate over the array and update the value of each cell as the sum of the values of the cell above it and the cell to the left of it. Finally, we will return the value of the last cell in the array, which will be the number of unique paths from the top-left corner to the bottom-right corner of the grid.

## Complexity Analysis
- **Time Complexity:** `O(m*n)`, where `m` is the number of rows and `n` is the number of columns in the grid.
- **Space Complexity:** `O(m*n)`, where `m` is the number of rows and `n` is the number of columns in the grid.
