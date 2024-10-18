# [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
First, we create a map with the rows, columns and blocks of the sudoku board. The key of the map is the number of the row, column or block and the value is a set with the numbers that are in that row, column or block.

Then we iterate over the board and check if the number is already in the row, column or block. If it is, we return False. If it is not, we add the number to the row, column and block.

Finally, we return True.