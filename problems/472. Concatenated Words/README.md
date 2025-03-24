# [472. Concatenated Words](https://leetcode.com/problems/concatenated-words/)

We will solve this problem by using a Trie with a custom seach method where we will keep track of the number of words that can be formed from the current index. We will start by building the Trie from the given list of words. Then, we will iterate through the list of words and check if the word can be formed by concatenating other words in the list. We will use the custom search method to check if the word can be formed by concatenating other words. If the word can be formed by concatenating other words, we will add it to the result list.

## Complexity Analysis
- **Time Complexity**: O(n * m), where n is the number of words in the list and m is the length of the longest word.
- **Space Complexity**: O(n * m), where n is the number of words in the list and m is the length of the longest word.
