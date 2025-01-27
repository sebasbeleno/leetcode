# [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

We will use BFS to solve this problem. We will use a queue to store the nodes of the tree. We will also use a variable to keep track of the level of the tree. We will use a boolean variable to keep track of the direction of the traversal. If the direction is left to right, we will add the nodes to the queue from left to right. If the direction is right to left, we will add the nodes to the queue from right to left. 

## Complexity Analysis
**Time Complexity:** `O(N)`, where `N` is the number of nodes in the tree.
**Space Complexity:** `O(N)`, where `N` is the number of nodes in the tree.