# [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

We will use DFS to solve this problem. We will create an array to store the right side view of the binary tree. We will start from the root node and traverse the binary tree in a depth-first manner. We will keep track of the level of the current node. If the level of the current node is greater than the size of the array, then we will add the current node to the array. If the level of the current node is less than the size of the array, then we will update the value of the array at the current level with the value of the current node. Finally, we will return the array that contains the right side view of the binary tree.

## Complexity Analysis
**Time Complexity:** `O(N)`, where `N` is the number of nodes in the binary tree.
**Space Complexity:** `O(N)`, where `N` is the number of nodes in the binary tree.
