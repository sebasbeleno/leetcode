# [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

We will use BFS to solve this problem. We will crete `mostLeft` variable to keep track of the most left node of the current level. while we are traversing the tree, we will connect the nodes of the current level. We will also keep track of the most left node of the next level. If the current node is the most left node of the current level, we will update the `mostLeft` variable to the most left node of the next level.

## Complexity Analysis
**Time Complexity:** `O(N)`, where `N` is the number of nodes in the tree.
**Space Complexity:** `O(N)`, where `N` is the number of nodes in the tree.
