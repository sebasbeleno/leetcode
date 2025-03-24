# [198. House Robber](https://leetcode.com/problems/house-robber/)

We will use Dynamic Programming to solve this problem. We will create a 2d array of size n x 2 where n is the number of houses. The first column will represent the maximum amount of money that can be robbed if the current house is not robbed and the second column will represent the maximum amount of money that can be robbed if the current house is robbed. We will iterate through the array and update the values of the array based on the following rules:

1. If the current house is not robbed, then the maximum amount of money that can be robbed is the maximum of the previous house being robbed or not robbed.
2. If the current house is robbed, then the maximum amount of money that can be robbed is the sum of the current house value and the maximum amount of money that can be robbed from the previous house that was not robbed.

At the end of the iteration, we will return the maximum of the last house being robbed or not robbed.

## Complexity Analysis
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$