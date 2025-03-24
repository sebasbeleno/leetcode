# [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

The approach is to use a sliding window to keep track of the longest substring without repeating characters.

We use a set since the lookup, insertion, and deletion operations are O(1) on average.

## Time complexity
**Time complexity** is O(n) since we iterate through the string once.
**Space complexity** is O(min(n, m)) where n is the length of the string and m is the size of the character set.
