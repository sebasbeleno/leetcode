# [268. Missing Number](https://leetcode.com/problems/missing-number/)

# Set Approach
To solve this problem, we will use a set to store all the numbers from `0` to `n`. Then we will iterate over the array and remove the number from the set. The missing number will be the only number left in the set.

## Complexity Analysis
**Time Complexity:** `O(n)` where `n` is the length of the array.
**Space Complexity:** `O(n)` where `n` is the length of the array.

# Cyclic Sort Approach
We can solve this problem using cyclic sort. We will iterate over the array and place the element at its correct position. If the element is already at its correct position, we will skip it. If the element is not at its correct position, we will swap it with the element at its correct position. After the cyclic sort, we will iterate over the array to find the missing number.

On the first iteration, we will skip numbers that are less than `0` or greater than the length of the array. On the second iteration, we will find the first number that is not at its correct position. The missing number will be the index where the number is not equal to the index.

## Complexity Analysis
**Time Complexity:** `O(n)` where `n` is the length of the array.
**Space Complexity:** `O(1)`.