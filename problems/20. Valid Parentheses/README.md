# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Wee will use a stack to solve this problem. We will iterate through the string and push the opening brackets onto the stack. When we encounter a closing bracket, we will check if the stack is empty. If the stack is empty, then we return `False`. Otherwise, we will pop the top element from the stack and check if it is the corresponding opening bracket. If it is not the corresponding opening bracket, then we return `False`. If we reach the end of the string and the stack is empty, then we return `True`.

## Complexity Analysis
**Time Complexity:** `O(N)`
**Space Complexity:** `O(N)`
