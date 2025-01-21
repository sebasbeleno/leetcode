# [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

We will approach this problem by using backtraking. We will keep track of the number of open and close brackets. We will add open bracket if the number of open brackets is less than n. We will add close bracket if the number of close brackets is less than the number of open brackets. We will keep track of the current string and the result. If the length of the current string is equal to 2*n, we will add the current string to the result. We will call the recursive function with the current string, the number of open brackets, the number of close brackets, and the result. We will return the result at the end.

## Complexity Analysis
**Time Complexity:** O(2^n) where n is the number of pairs of parentheses.
**Space Complexity:** O(2^n) where n is the number of pairs of parentheses.