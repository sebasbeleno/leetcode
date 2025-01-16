#[287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

We can solve this problem using the Floyd's Tortoise and Hare (Cycle Detection) algorithm. The idea is to treat the array as a linked list where the value at each index is the next index. We can find the duplicate number by detecting the cycle in the linked list.

Let's say we have an array `nums = [1, 3, 4, 2, 2]`. We can represent the array as a linked list where the value at each index is the next index.

## Complexity Analysis
**Time Complexity:** `O(N)`
**Space Complexity:** `O(1)`
