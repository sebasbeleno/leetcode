# [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

To solve this problem, we will use a DFS approach. We will start from the root node and traverse the binary tree in a depth-first manner. We will keep track of the previous node that we have visited. If the previous node is not `None`, then we will update the right child of the previous node with the current node. Finally, we will return the root node of the flattened binary tree.

## Complexity Analysis
**Time Complexity:** `O(N)`, where `N` is the number of nodes in the binary tree.
**Space Complexity:** `O(N)`, where `N` is the number of nodes in the binary tree.
