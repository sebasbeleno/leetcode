# [337. House Robber III](https://leetcode.com/problems/house-robber-iii/)

We will approach this problem by using dynamic programming. We will define a recursive function `rob` that will return the maximum amount of money that can be robbed from the subtree rooted at the current node. The function will take the current node as an argument and return a tuple `(included, excluded)` where `included` is the maximum amount of money that can be robbed from the subtree rooted at the current node if the current node is robbed, and `excluded` is the maximum amount of money that can be robbed from the subtree rooted at the current node if the current node is not robbed.

## Complexity Analysis
**Time Complexity:** `O(N)` where `N` is the number of nodes in the tree.
**Space Complexity:** `O(H)` where `H` is the height of the tree.
