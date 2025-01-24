# [645. Set Mismatch](https://leetcode.com/problems/set-mismatch/)

We will approach this problem by using cyclic sort. We will iterate over the array and place the element at its correct position. If the element is already at its correct position, we will skip it. If the element is not at its correct position, we will swap it with the element at its correct position. After the cyclic sort, we will iterate over the array to find the missing and duplicate element.

The missing element will be the index where the element is not equal to the index + 1. The duplicate element will be the element at the index where the element is not equal to the index + 1.

## Complexity Analysis
**Time Complexity:** `O(n)` where `n` is the length of the array.
**Space Complexity:** `O(1)`.