# [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

We can solve this problem using Kadane's algorithm. We will iterate over the array and keep track of the maximum sum of subarray ending at the current index. We will also keep track of the maximum sum of subarray so far. We will return the maximum sum of subarray so far.

## Complexity Analysis
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
