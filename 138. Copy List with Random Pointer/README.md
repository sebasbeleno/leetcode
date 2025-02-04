# [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

We will first create a hash map `mapping` to store the mapping between the original nodes and the new nodes. We will iterate over the original linked list and create a new node for each node in the original linked list. We will store the mapping between the original node and the new node in the `mapping` hash map.

We will then iterate over the original linked list again and for each node, we will set the `next` and `random` pointers of the new node using the mapping stored in the `mapping` hash map.

Finally, we will return the head of the new linked list.

## Complexity Analysis
- **Time Complexity:** $O(n)$ where `n` is the number of nodes in the linked list.
- **Space Complexity:** $O(n)$ where `n` is the number of nodes in the linked list.
