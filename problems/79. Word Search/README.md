# [79. Word Search](https://leetcode.com/problems/word-search/)

We will approach this problem by using backtracking. We will iterate through each cell of the board and check if the cell contains the first character of the word. If it does, we will start the backtracking process from that cell. We will keep track of the visited cells to avoid visiting the same cell multiple times. If we find the word, we will return `True`. Otherwise, we will return `False`.

## Complexity Analysis
**Time Complexity:** `O(N * 3^L)` where `N` is the number of cells in the board and `L` is the length of the word. We have `3^L` possibilities for each cell, and we have `N` cells in the board.
**Space Complexity:** `O(L)` where `L` is the length of the word.
