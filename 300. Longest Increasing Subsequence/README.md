# [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

We will solve this problem using dynamic programming. We will create a list `dp` of the same length as the input list `nums`. The `dp[i]` will store the length of the longest increasing subsequence ending at index `i`. We will initialize all the elements of `dp` with 1 because the minimum length of the increasing subsequence will be 1.

We will iterate over the input list `nums` and for each element at index `i`, we will iterate over all the elements before it (from 0 to `i-1`) and check if the element at index `i` is greater than the element at index `j`. If it is, then we will update the value of `dp[i]` to be the maximum of `dp[i]` and `dp[j] + 1`. This is because if the element at index `i` is greater than the element at index `j`, then we can add the element at index `i` to the increasing subsequence ending at index `j` to form a longer increasing subsequence ending at index `i`.

Finally, we will return the maximum value in the `dp` list, which will be the length of the longest increasing subsequence in the input list `nums`.

## Time Complexity
- **Approach 1**: The time complexity of this approach is O(n^2), where n is the length of the input list `nums`. This is because we are iterating over the input list `nums` and for each element at index `i`, we are iterating over all the elements before it (from 0 to `i-1`).
- **Approach 2**: The time complexity of this approach is O(n log n), where n is the length of the input list `nums`. This is because we are using the binary search algorithm to find the correct position to insert the element in the `tails` list, which has a time complexity of O(log n).