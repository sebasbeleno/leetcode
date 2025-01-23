# [134. Gas Station](https://leetcode.com/problems/gas-station/)

We will approach this problem by using greedy algorithm. We will start from the first station and keep track of the gas and cost. If the gas is greater than the cost, we will move to the next station. If the gas is less than the cost, we will move to the next station and reset the gas and cost. We will keep track of the total gas and cost. If the total gas is greater than or equal to the total cost, we will return the starting station. Otherwise, we will return -1.

## Complexity Analysis
**Time Complexity:** `O(N)` where `N` is the number of stations.
**Space Complexity:** `O(1)`.