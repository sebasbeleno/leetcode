# [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

The insert and search time complexity is O(n), where n is the length of the word. First we initialize a node as the root and then iterate through the word. For each character, we check if the character is in the children of the current node. If it is, we move to the next node. If it is not, we create a new node and add it to the children of the current node. After iterating through the word, we set the is_end attribute of the last node to True.

For the search operation, we iterate through the word and check if the character is in the children of the current node. If it is, we move to the next node. If it is not, we return False. After iterating through the word, we check if the is_end attribute of the last node is True. If it is, we return True. Otherwise, we return False.

## Complexity Analysis
- **Time Complexity**:
  - Insert: O(n), where n is the length of the word.
  - Search: O(n), where n is the length of the word.
- **Space Complexity**: O(n), where n is the total number of characters in the trie.