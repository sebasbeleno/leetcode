# [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

We will use sliding window to solve this problem. The idea is to keep track of the maximum repeating character in the window. If the window size minus the maximum repeating character is greater than k, then we need to shrink the window. We will keep track of the maximum window size.

We dont care about decreasing the most frequent character in the window, because we are looking for the longest substring with repeating characters. So we can keep increasing the window size until we have to shrink the window.

## Complexity Analysis
**Time Complexity:** `O(N)`
**Space Complexity:** `O(1)`