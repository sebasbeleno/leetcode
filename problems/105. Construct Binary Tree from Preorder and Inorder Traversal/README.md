# [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

The provided code defines a function buildTree that constructs a binary tree from given preorder and inorder traversal arrays. The buildTree function initializes a pIndex array to keep track of the current index in the preorder array and a mapping to store the indices of elements in the inorder array for quick lookup. The mapping is populated by iterating through the inorder array and storing each element's index.

The buildTree function then calls the dfs function, which performs a depth-first search to construct the tree. The dfs function takes several parameters: the preorder and inorder arrays, the current left and right bounds within the inorder array, the mapping, and the pIndex.

Within the dfs function, the base case checks if the left bound exceeds the right bound, in which case it returns null, indicating no node exists in this subtree. Otherwise, it retrieves the current root value from the preorder array using pIndex, increments pIndex, and creates a new TreeNode with this value. If the left and right bounds are equal, it means the node is a leaf, and the function returns this node.

The function then finds the index of the current root value in the inorder array using the mapping. It recursively constructs the left and right subtrees by calling dfs with updated bounds. The left subtree is constructed from the elements to the left of the current root in the inorder array, and the right subtree from the elements to the right. Finally, the function returns the constructed root node, which is connected to its left and right subtrees.

## Complexity Analysis
**Time Complexity:** O(N), where N is the number of nodes in the binary tree. The function visits each node once during the construction process.
**Space Complexity:** O(N), where N is the number of nodes in the binary tree. The function uses O(N) space for the mapping and O(H) space for the recursive call stack, where H is the height of the binary tree.

```java