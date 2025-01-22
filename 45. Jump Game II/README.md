# [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)

We will approach this problem by using greedy algorithm. We will keep track of the maximum index we can reach. We will keep track of the number of jumps we have made. We will keep track of the current index and the maximum index we can reach. We will iterate through the array and update the maximum index we can reach. If the current index is equal to the maximum index we can reach, we will increment the number of jumps we have made. We will update the current index to the maximum index we can reach. If the current index is greater than or equal to the last index, we will return the number of jumps we have made. We will return -1 at the end.

## Complexity Analysis
**Time Complexity:** O(n) where n is the length of the input array.
**Space Complexity:** O(1)