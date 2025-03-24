# [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

We will use backtracking to solve this problem. We will keep track of the current string and the result. We will add the letter corresponding to the current digit to the current string. If the length of the current string is equal to the length of the digits, we will add the current string to the result. We will call the recursive function with the current string, the digits, and the result. We will return the result at the end.

## Complexity Analysis
**Time Complexity:** O(4^n) where n is the number of digits in the input string.
**Space Complexity:** O(4^n) where n is the number of digits in the input string.

