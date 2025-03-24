# [341. Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/)

## Approach 1: Using array and recursion

To solve this problem, we can use an array to store the flattened list of integers. We can use a recursive function to flatten the nested list of integers. The recursive function will iterate through the nested list of integers and add the integers to the array. If the element is a nested list of integers, the recursive function will call itself with the nested list of integers as the argument. After flattening the nested list of integers, we can implement the `hasNext` and `next` functions to return the next integer in the array and check if there are any more integers in the array, respectively.

## Complexity Analysis
**Time Complexity:** `O(n)`
**Space Complexity:** `O(n)`
- `n` is the total number of integers in the nested list of integers.

