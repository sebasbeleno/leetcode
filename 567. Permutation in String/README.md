# [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)

We will use sliding window to solve this problem. We will keep track of the frequency of characters in the window and compare it with the frequency of characters in the target string. If the frequency of characters in the window is equal to the frequency of characters in the target string, then we have found the permutation.

to keep track of the frequency we will use an array with 26 elements, where each element will represent the frequency of a character. We will use two pointers to keep track of the window. We will increase the frequency of the character at the right pointer and decrease the frequency of the character at the left pointer. If the frequency of characters in the window is equal to the frequency of characters in the target string, then we have found the permutation.

## Complexity Analysis
**Time Complexity:** `O(N)`
**Space Complexity:** `O(1)`
