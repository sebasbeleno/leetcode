# [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

We will solve this problem by ussing cylic sort. We will iterate over the array and place the element at its correct position. If the element is already at its correct position, we will skip it. If the element is not at its correct position, we will swap it with the element at its correct position. After the cyclic sort, we will iterate over the array to find the missing positive element.

On the first iteration, we will skip numbers that are less than 1 or greater than the length of the array. On the second iteration, we will find the first number that is not at its correct position. The missing positive number will be the index where the number is not equal to the index + 1.

## Complexity Analysis
**Time Complexity:** `O(n)` where `n` is the length of the array.
**Space Complexity:** `O(1)`.