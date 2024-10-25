# [15. 3Sum](https://leetcode.com/problems/3sum/)

The aproach is to sort the array.

Then we iterate over the array, and for each element we iterate over the rest of the array with two pointers, one at the start and one at the end.

On each iteration we check if the previous element is the same as the current one, if it is we skip it. This is to avoid duplicates. We do this validation on the outer loop and on the inner loop with the left pointer.

## Complexity Analysis
**Time complexity:** O(n^2)
**Space complexity:** O(1)
