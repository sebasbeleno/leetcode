# [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

To solve this problem, we need to sort the intervals by the start value. Then we can iterate through the intervals and merge them if they overlap. If they don't overlap, we add the current interval to the result and update the current interval to the next one.

## Complexity Analysis
**Time Complexity:** `O(nlogn)` if we consider the sorting of the intervals. The merging of the intervals takes `O(n)` time.
**Space Complexity:** `O(n)` - where `n` is the number of intervals.