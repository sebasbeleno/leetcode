# [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)

To solve this problem we will check if there is any zero. If so we set the flag to true. Then we will iterate through the matrix and if we find any zero we will set the corresponding row and column to zero. Finally we will iterate through the matrix and if the row or column is zero we will set the element to zero.

## Complexity Analysis
**Time Complexity:** `O(N*M)` where `N` is the number of rows and `M` is the number of columns in the matrix.
**Space Complexity:** `O(1)` as we are not using any extra space.