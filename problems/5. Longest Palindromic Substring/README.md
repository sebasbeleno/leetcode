# [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

We will use Dynamic programming to solve this problem. We will create a 2D array `dp` where `dp[i][j]` will be `True` if the substring from `i` to `j` is a palindrome. We will iterate from the end of the string and fill the `dp` array. We will also keep track of the longest palindrome substring.

## Complexity Analysis
- **Time Complexity:** `O(n^2)` where `n` is the length of the input string.
- **Space Complexity:** `O(n^2)` where `n` is the length of the input string.