# [55. Jump Game](https://leetcode.com/problems/jump-game/)

We can approach this problem by using a greedy algorithm. We will keep track of the maximum index we can reach. We will iterate through the array and update the maximum index we can reach. If the current index is greater than the maximum index we can reach, we will return false. If the maximum index we can reach is greater than or equal to the last index, we will return true. We will return false at the end.

## Complexity Analysis
**Time Complexity:** O(n) where n is the length of the input array. 
**Space Complexity:** O(1)
